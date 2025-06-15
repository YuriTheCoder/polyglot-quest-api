const fs = require('fs')
const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')

// Importa a mesma configuração usada pelo swagger-ui-express
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gamified Task Management API',
      version: '1.0.0',
      description: 'API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '64a1b2c3d4e5f6789abcdef0' },
            name: { type: 'string', example: 'Yuri Dev' },
            email: { type: 'string', example: 'yuri.dev@example.com' },
            role: { type: 'string', enum: ['user', 'admin'], example: 'user' },
            isActive: { type: 'boolean', example: true },
            lastLogin: { type: 'string', format: 'date-time' },
            gamification: {
              type: 'object',
              properties: {
                level: { type: 'number', example: 5 },
                totalXP: { type: 'number', example: 450 }
              }
            }
          }
        },
        Task: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '64a1b2c3d4e5f6789abcdef1' },
            title: { type: 'string', example: 'Implementar Story-Mode' },
            status: { type: 'string', enum: ['pending', 'in_progress', 'completed'] },
            priority: { type: 'string', enum: ['low', 'medium', 'high'] },
            userId: { type: 'string', example: '64a1b2c3d4e5f6789abcdef0' }
          }
        },
        Story: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '64a1b2c3d4e5f6789abcdef2' },
            title: { type: 'string', example: 'A Batalha contra o Bug Monstruoso' },
            story: { type: 'string', example: 'Nas profundezas do código, um bug terrível despertou...' },
            theme: { type: 'string', enum: ['medieval', 'scifi', 'modern', 'fantasy'] },
            progress: { type: 'number', example: 50 }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Erro de validação' }
          }
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./src/routes/*.js']
}

console.log('Gerando especificação OpenAPI...')

try {
  const swaggerSpec = swaggerJSDoc(options)
  const outputPath = path.resolve(process.cwd(), 'openapi.json')
  
  fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2))
  
  console.log(`✅ Especificação OpenAPI gerada com sucesso em: ${outputPath}`)
} catch (error) {
  console.error('❌ Erro ao gerar especificação OpenAPI:', error)
  process.exit(1)
} 