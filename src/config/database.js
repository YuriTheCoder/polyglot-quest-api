const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const mongoURI = process.env.NODE_ENV === 'test'
      ? process.env.MONGODB_TEST_URI
      : process.env.MONGODB_URI

    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in environment variables')
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    // if (process.env.NODE_ENV !== 'test') {
    //   console.log(`📦 MongoDB Connected: ${conn.connection.host}`)
    // }
  } catch (error) {
    // console.error('❌ Database connection error:', error.message)
    if (process.env.NODE_ENV !== 'test') {
      process.exit(1)
    }
  }
}

const disconnectDB = async () => {
  try {
    await mongoose.connection.close()
    // if (process.env.NODE_ENV !== 'test') {
    //   console.log('📦 MongoDB Disconnected')
    // }
  } catch (error) {
    // console.error('❌ Database disconnection error:', error.message)
  }
}

module.exports = { connectDB, disconnectDB }
