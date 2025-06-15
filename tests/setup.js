const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')

let mongoServer

// Setup antes de todos os testes
beforeAll(async () => {
  // Criar instância do MongoDB em memória
  mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()

  // Conectar ao MongoDB em memória
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})

// Cleanup após cada teste
afterEach(async () => {
  // Limpar todas as coleções
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
})

// Cleanup após todos os testes
afterAll(async () => {
  // Fechar conexão com MongoDB
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  
  // Parar servidor MongoDB em memória
  await mongoServer.stop()
}) 