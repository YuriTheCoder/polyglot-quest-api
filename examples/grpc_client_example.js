const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load proto file
const PROTO_PATH = path.join(__dirname, '../proto/gamified_tasks.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const gamifiedTasksProto = grpc.loadPackageDefinition(packageDefinition).gamified_tasks;

// Create clients
const authClient = new gamifiedTasksProto.AuthService('localhost:50051', grpc.credentials.createInsecure());
const taskClient = new gamifiedTasksProto.TaskService('localhost:50051', grpc.credentials.createInsecure());
const gamificationClient = new gamifiedTasksProto.GamificationService('localhost:50051', grpc.credentials.createInsecure());
const adminClient = new gamifiedTasksProto.AdminService('localhost:50051', grpc.credentials.createInsecure());

// Example usage
async function demonstrateGrpcClient() {
  try {
    console.log('🚀 Starting gRPC Client Demo\n');

    // 1. Register a new user
    console.log('1. Registering new user...');
    const registerResponse = await new Promise((resolve, reject) => {
      authClient.registerUser({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log('✅ User registered:', registerResponse.user.name);

    // 2. Login user
    console.log('\n2. Logging in user...');
    const loginResponse = await new Promise((resolve, reject) => {
      authClient.loginUser({
        email: 'john@example.com',
        password: 'password123'
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    const token = loginResponse.token;
    console.log('✅ User logged in, token received');

    // 3. Create a task
    console.log('\n3. Creating a task...');
    const createTaskResponse = await new Promise((resolve, reject) => {
      taskClient.createTask({
        token: token,
        title: 'Complete gRPC implementation',
        description: 'Implement all gRPC services for the gamified task API',
        priority: 'high',
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        tags: ['development', 'grpc', 'api']
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    const taskId = createTaskResponse.task.id;
    console.log('✅ Task created:', createTaskResponse.task.title);

    // 4. List tasks
    console.log('\n4. Listing tasks...');
    const listTasksResponse = await new Promise((resolve, reject) => {
      taskClient.listTasks({
        token: token,
        page: 1,
        limit: 10,
        status: 'pending'
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log(`✅ Found ${listTasksResponse.tasks.length} tasks`);

    // 5. Complete task
    console.log('\n5. Completing task...');
    const completeTaskResponse = await new Promise((resolve, reject) => {
      taskClient.completeTask({
        token: token,
        task_id: taskId
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log('✅ Task completed:', completeTaskResponse.task.title);

    // 6. Get gamification dashboard
    console.log('\n6. Getting gamification dashboard...');
    const dashboardResponse = await new Promise((resolve, reject) => {
      gamificationClient.getGamificationDashboard({
        token: token
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log('✅ Dashboard data:', {
      level: dashboardResponse.user.gamification.level,
      totalXp: dashboardResponse.user.gamification.total_xp,
      tasksCompleted: dashboardResponse.stats.tasks_completed
    });

    // 7. Get leaderboard
    console.log('\n7. Getting leaderboard...');
    const leaderboardResponse = await new Promise((resolve, reject) => {
      gamificationClient.getLeaderboard({
        limit: 5
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log(`✅ Leaderboard has ${leaderboardResponse.leaderboard.length} entries`);

    // 8. Get badges
    console.log('\n8. Getting badges...');
    const badgesResponse = await new Promise((resolve, reject) => {
      gamificationClient.getBadges({
        token: token
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log(`✅ Available badges: ${badgesResponse.available.length}, Earned: ${badgesResponse.earned.length}`);

    // 9. Create story from tasks
    console.log('\n9. Creating story from tasks...');
    const storyResponse = await new Promise((resolve, reject) => {
      gamificationClient.createStoryFromTasks({
        token: token,
        task_ids: [taskId],
        user_preferences: {
          character_class: 'warrior',
          story_theme: 'fantasy'
        }
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log('✅ Story created:', storyResponse.story.title);

    // 10. Get task statistics
    console.log('\n10. Getting task statistics...');
    const statsResponse = await new Promise((resolve, reject) => {
      taskClient.getTaskStats({
        token: token
      }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
    console.log('✅ Task stats:', {
      total: statsResponse.stats.total,
      completed: statsResponse.stats.completed,
      completionRate: `${(statsResponse.stats.completion_rate * 100).toFixed(1)}%`
    });

    console.log('\n🎉 gRPC Client Demo completed successfully!');

  } catch (error) {
    console.error('❌ Error during gRPC demo:', error.message);
  }
}

// Helper function to promisify gRPC calls
function promisifyGrpcCall(client, method, request) {
  return new Promise((resolve, reject) => {
    client[method](request, (error, response) => {
      if (error) reject(error);
      else resolve(response);
    });
  });
}

// Run the demo
if (require.main === module) {
  demonstrateGrpcClient();
}

module.exports = {
  authClient,
  taskClient,
  gamificationClient,
  adminClient,
  promisifyGrpcCall
}; 