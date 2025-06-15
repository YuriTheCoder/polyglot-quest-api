const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

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
            id: {
              type: 'string',
              example: '64a1b2c3d4e5f6789abcdef0'
            },
            name: {
              type: 'string',
              example: 'Yuri Dev'
            },
            email: {
              type: 'string',
              example: 'yuri.dev@example.com'
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
              example: 'user'
            },
            isActive: {
              type: 'boolean',
              example: true
            },
            lastLogin: {
              type: 'string',
              format: 'date-time'
            },
            gamification: {
              type: 'object',
              properties: {
                level: { type: 'number', example: 5 },
                totalXP: { type: 'number', example: 450 },
                tasksCompleted: { type: 'number', example: 25 },
                currentStreak: { type: 'number', example: 7 },
                badges: { type: 'array', items: { type: 'string' } }
              }
            }
          }
        },
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '64a1b2c3d4e5f6789abcdef1'
            },
            title: {
              type: 'string',
              example: 'Implementar Story-Mode'
            },
            description: {
              type: 'string',
              example: 'Criar endpoint para gerar histórias com IA'
            },
            status: {
              type: 'string',
              enum: ['pending', 'in_progress', 'completed']
            },
            priority: {
              type: 'string',
              enum: ['low', 'medium', 'high']
            },
            dueDate: {
              type: 'string',
              format: 'date-time'
            },
            userId: {
              type: 'string',
              example: '64a1b2c3d4e5f6789abcdef0'
            },
            tags: {
              type: 'array',
              items: { type: 'string' }
            },
            gamification: {
              type: 'object',
              properties: {
                xpReward: { type: 'number', example: 50 },
                questTitle: { type: 'string', example: 'A Saga da IA' }
              }
            }
          }
        },
        Story: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '64a1b2c3d4e5f6789abcdef2'
            },
            title: {
              type: 'string',
              example: 'A Batalha contra o Bug Monstruoso'
            },
            story: {
              type: 'string',
              example: 'Nas profundezas do código, um bug terrível despertou...'
            },
            theme: {
              type: 'string',
              enum: ['medieval', 'scifi', 'modern', 'fantasy']
            },
            progress: {
              type: 'number',
              example: 50
            },
            isCompleted: {
              type: 'boolean',
              example: false
            },
            quests: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  taskId: { type: 'string' },
                  questTitle: { type: 'string' },
                  completed: { type: 'boolean' }
                }
              }
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Erro de validação'
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string' },
                  message: { type: 'string' }
                }
              }
            }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerSetup = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'Gamified Tasks API Docs'
    })
  )
}

module.exports = swaggerSetup
