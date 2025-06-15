const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

// Import existing controllers
const authController = require('../controllers/authController')
const taskController = require('../controllers/taskController')
const gamificationController = require('../controllers/gamificationController')
const userController = require('../controllers/userController')

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gamified-tasks'
    await mongoose.connect(mongoURI)
    // console.log('📦 MongoDB connected for gRPC server')
  } catch (error) {
    // console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}

// Load proto file
const PROTO_PATH = path.join(__dirname, '../../proto/gamified_tasks.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})

const gamifiedTasksProto = grpc.loadPackageDefinition(packageDefinition).gamified_tasks

// Helper function to convert Express middleware to gRPC
const convertToGrpcHandler = (expressHandler) => {
  return async (call, callback) => {
    try {
      // Create mock req/res objects
      const req = {
        body: call.request,
        headers: { authorization: call.request.token ? `Bearer ${call.request.token}` : '' },
        params: {},
        query: {},
        user: null // Will be set by auth middleware if needed
      }

      // Extract params from request
      if (call.request.task_id) req.params.id = call.request.task_id
      if (call.request.user_id) req.params.id = call.request.user_id
      if (call.request.story_id) req.params.id = call.request.story_id
      if (call.request.status) req.params.status = call.request.status

      // Extract query params
      if (call.request.page) req.query.page = call.request.page
      if (call.request.limit) req.query.limit = call.request.limit
      if (call.request.search) req.query.search = call.request.search
      if (call.request.priority) req.query.priority = call.request.priority
      if (call.request.sort_by) req.query.sortBy = call.request.sort_by
      if (call.request.sort_order) req.query.sortOrder = call.request.sort_order
      if (call.request.active !== undefined) req.query.active = call.request.active

      let responseData = null
      let statusCode = 200

      const res = {
        status: (code) => {
          statusCode = code
          return {
            json: (data) => {
              responseData = data
            }
          }
        },
        json: (data) => {
          responseData = data
        }
      }

      // Execute the controller
      await expressHandler(req, res)

      // Send response
      if (statusCode >= 200 && statusCode < 300) {
        callback(null, {
          success: true,
          message: responseData?.message || 'Success',
          ...responseData
        })
      } else {
        callback({
          code: grpc.status.INTERNAL,
          message: responseData?.message || 'Internal server error'
        })
      }
    } catch (error) {
      // console.error('gRPC Handler Error:', error)
      callback({
        code: grpc.status.INTERNAL,
        message: error.message
      })
    }
  }
}

// Authentication Service Implementation
const authService = {
  registerUser: convertToGrpcHandler(authController.register),
  loginUser: convertToGrpcHandler(authController.login),
  getUserProfile: convertToGrpcHandler(authController.getProfile),
  updateUserProfile: convertToGrpcHandler(authController.updateProfile),
  changeUserPassword: convertToGrpcHandler(authController.changePassword),
  logoutUser: convertToGrpcHandler(authController.logout)
}

// Task Service Implementation
const taskService = {
  listTasks: convertToGrpcHandler(taskController.getTasks),
  createTask: convertToGrpcHandler(taskController.createTask),
  getTaskById: convertToGrpcHandler(taskController.getTaskById),
  updateTask: convertToGrpcHandler(taskController.updateTask),
  deleteTask: convertToGrpcHandler(taskController.deleteTask),
  completeTask: convertToGrpcHandler(taskController.completeTask),
  getTaskStats: convertToGrpcHandler(taskController.getTaskStats),
  listTasksByStatus: convertToGrpcHandler(taskController.getTasksByStatus)
}

// Gamification Service Implementation
const gamificationService = {
  createStoryFromTasks: convertToGrpcHandler(taskController.createStoryFromTasks),
  completeQuest: convertToGrpcHandler(taskController.completeQuest),
  listStories: convertToGrpcHandler(taskController.getStories),
  getStoryById: convertToGrpcHandler(taskController.getStoryById),
  getLeaderboard: convertToGrpcHandler(gamificationController.getLeaderboard),
  getGamificationDashboard: convertToGrpcHandler(gamificationController.getDashboard),
  getBadges: convertToGrpcHandler(gamificationController.getBadges),
  updateGamificationPreferences: convertToGrpcHandler(gamificationController.updatePreferences),
  shareMilestone: convertToGrpcHandler(gamificationController.shareMilestone),
  getGlobalStats: convertToGrpcHandler(gamificationController.getGlobalStats)
}

// Admin Service Implementation
const adminService = {
  getUserStats: convertToGrpcHandler(userController.getUserStats),
  getAllUsers: convertToGrpcHandler(userController.getAllUsers),
  getUserById: convertToGrpcHandler(userController.getUserById),
  updateUser: convertToGrpcHandler(userController.updateUser),
  deleteUser: convertToGrpcHandler(userController.deleteUser),
  toggleUserStatus: convertToGrpcHandler(userController.toggleUserStatus)
}

// Create and start gRPC server
async function startGrpcServer (port = 50051) {
  // Connect to database first
  await connectDB()

  const server = new grpc.Server()

  // Add services
  server.addService(gamifiedTasksProto.AuthService.service, authService)
  server.addService(gamifiedTasksProto.TaskService.service, taskService)
  server.addService(gamifiedTasksProto.GamificationService.service, gamificationService)
  server.addService(gamifiedTasksProto.AdminService.service, adminService)

  // Bind and start server
  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (error, boundPort) => {
      if (error) {
        // console.error('❌ Failed to start gRPC server:', error)
        return
      }
      // console.log(`🚀 gRPC Server running on port ${boundPort}`)
      // console.log('📡 Available services:')
      // console.log('   - AuthService (6 methods)')
      // console.log('   - TaskService (8 methods)')
      // console.log('   - GamificationService (10 methods)')
      // console.log('   - AdminService (6 methods)')
      // console.log('⚡ Ready for high-performance API calls!')
      server.start()
    }
  )

  // Graceful shutdown
  process.on('SIGINT', () => {
    // console.log('\n🛑 Shutting down gRPC server...')
    server.tryShutdown(() => {
      // console.log('✅ gRPC server stopped')
      mongoose.connection.close()
      process.exit(0)
    })
  })

  return server
}

// Start server if this file is run directly
if (require.main === module) {
  const port = process.env.GRPC_PORT || 50051
  startGrpcServer(port)
}

module.exports = { startGrpcServer }
