const express = require('express')
const router = express.Router()

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  getTaskStats,
  completeTask,
  getTasksByStatus,
  generateStory,
  completeQuest,
  getUserStories,
  getStory
} = require('../controllers/taskController')

const {
  validateCreateTask,
  validateUpdateTask,
  validateListTasksQuery
} = require('../validators/taskValidator')

const { authenticate } = require('../middleware/auth')

// Aplicar autenticação a todas as rotas
router.use(authenticate)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: 'Create a new task'
 *     operationId: createTask
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 100
 *                 example: "Implementar autenticação JWT"
 *               description:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 500
 *                 example: "Implementar sistema de autenticação usando JWT com middleware de verificação"
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *                 default: pending
 *                 example: "pending"
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 default: medium
 *                 example: "high"
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-31T23:59:59.000Z"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   maxLength: 20
 *                 maxItems: 10
 *                 example: ["backend", "auth", "jwt"]
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tarefa criada com sucesso"
 *                 data:
 *                   type: object
 *                   properties:
 *                     task:
 *                       $ref: '#/components/schemas/Task'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', validateCreateTask, createTask)

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: 'Get all tasks for the logged-in user'
 *     operationId: listTasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, in_progress, completed]
 *         description: Filtrar por status
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *           enum: [low, medium, high]
 *         description: Filtrar por prioridade
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Itens por página
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [createdAt, updatedAt, dueDate, priority, title]
 *           default: createdAt
 *         description: Campo para ordenação
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Ordem da classificação
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           maxLength: 100
 *         description: Buscar no título e descrição
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     tasks:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Task'
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         current:
 *                           type: integer
 *                           example: 1
 *                         pages:
 *                           type: integer
 *                           example: 5
 *                         total:
 *                           type: integer
 *                           example: 50
 *                         limit:
 *                           type: integer
 *                           example: 10
 */
router.get('/', validateListTasksQuery, getTasks)

/**
 * @swagger
 * /api/tasks/stats:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: 'Get task statistics'
 *     operationId: getTaskStats
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Estatísticas das tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     stats:
 *                       type: object
 *                       properties:
 *                         total:
 *                           type: integer
 *                           example: 25
 *                         pending:
 *                           type: integer
 *                           example: 10
 *                         in_progress:
 *                           type: integer
 *                           example: 8
 *                         completed:
 *                           type: integer
 *                           example: 7
 *                         overdue:
 *                           type: integer
 *                           example: 3
 *                         completedThisMonth:
 *                           type: integer
 *                           example: 5
 *                     overdueTasks:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Task'
 */
router.get('/stats', getTaskStats)

/**
 * @swagger
 * /api/tasks/status/{status}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: 'Get tasks by status'
 *     operationId: listTasksByStatus
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *           enum: [pending, in_progress, completed]
 *         description: Status das tarefas
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Itens por página
 *     responses:
 *       200:
 *         description: Tarefas filtradas por status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     tasks:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Task'
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         current:
 *                           type: integer
 *                         pages:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *       400:
 *         description: Status inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/status/:status', getTasksByStatus)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: 'Get a specific task by ID'
 *     operationId: getTaskById
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Detalhes da tarefa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     task:
 *                       $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Acesso negado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', getTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     tags:
 *       - Tasks
 *     summary: 'Update a task'
 *     operationId: updateTask
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             minProperties: 1
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 100
 *                 example: "Implementar autenticação JWT - Atualizado"
 *               description:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 500
 *                 example: "Implementar sistema de autenticação usando JWT com middleware de verificação e refresh tokens"
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *                 example: "in_progress"
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: "high"
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *                 example: "2024-12-31T23:59:59.000Z"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   maxLength: 20
 *                 maxItems: 10
 *                 example: ["backend", "auth", "jwt", "security"]
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tarefa atualizada com sucesso"
 *                 data:
 *                   type: object
 *                   properties:
 *                     task:
 *                       $ref: '#/components/schemas/Task'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Acesso negado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', validateUpdateTask, updateTask)

/**
 * @swagger
 * /api/tasks/{id}/complete:
 *   patch:
 *     tags:
 *       - Tasks
 *     summary: 'Mark a task as complete'
 *     operationId: completeTask
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa marcada como concluída
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tarefa marcada como concluída"
 *                 data:
 *                   type: object
 *                   properties:
 *                     task:
 *                       $ref: '#/components/schemas/Task'
 *       400:
 *         description: Tarefa já está concluída
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Acesso negado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.patch('/:id/complete', completeTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: 'Delete a task'
 *     operationId: deleteTask
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tarefa deletada com sucesso"
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Acesso negado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', deleteTask)

// 🎮 GAMIFICATION ROUTES

/**
 * @swagger
 * /api/tasks/story:
 *   post:
 *     tags:
 *       - Gamification
 *     summary: 'Generate a story from tasks'
 *     operationId: createStoryFromTasks
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - taskIds
 *             properties:
 *               taskIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 minItems: 1
 *                 maxItems: 10
 *                 example: ["64a1b2c3d4e5f6789abcdef0", "64a1b2c3d4e5f6789abcdef1"]
 *               userPreferences:
 *                 type: object
 *                 properties:
 *                   theme:
 *                     type: string
 *                     enum: [medieval, scifi, modern, fantasy]
 *                     example: "medieval"
 *                   class:
 *                     type: string
 *                     enum: [Aventureiro, Guerreiro, Mago, Ladino, Paladino, Explorador]
 *                     example: "Guerreiro"
 *     responses:
 *       201:
 *         description: História épica gerada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "História épica gerada com sucesso!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     story:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         story:
 *                           type: string
 *                         theme:
 *                           type: string
 *                         totalXP:
 *                           type: number
 *                         estimatedPlayTime:
 *                           type: string
 *                     quests:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           questTitle:
 *                             type: string
 *                           questDescription:
 *                             type: string
 *                           difficulty:
 *                             type: string
 *                           xp:
 *                             type: number
 *                           category:
 *                             type: string
 */
router.post('/story', generateStory)

/**
 * @swagger
 * /api/tasks/{id}/complete-quest:
 *   post:
 *     tags:
 *       - Gamification
 *     summary: 'Complete a quest (task) and get XP'
 *     operationId: completeQuest
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa/quest
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completionTime:
 *                 type: number
 *                 description: Tempo gasto em minutos
 *                 example: 45
 *     responses:
 *       200:
 *         description: Quest completada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Quest completada! +25 XP"
 *                 data:
 *                   type: object
 *                   properties:
 *                     task:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         questTitle:
 *                           type: string
 *                         xpEarned:
 *                           type: number
 *                     gamification:
 *                       type: object
 *                       properties:
 *                         xpGained:
 *                           type: number
 *                         leveledUp:
 *                           type: boolean
 *                         newLevel:
 *                           type: number
 *                         newBadges:
 *                           type: array
 *                         totalXP:
 *                           type: number
 *                         currentStreak:
 *                           type: number
 */
router.post('/:id/complete-quest', completeQuest)

/**
 * @swagger
 * /api/tasks/stories:
 *   get:
 *     tags:
 *       - Gamification
 *     summary: 'List all stories for the user'
 *     operationId: listStories
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: active
 *         schema:
 *           type: string
 *           enum: [true, false]
 *           default: true
 *         description: Filtrar histórias ativas
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *           default: 10
 *         description: Limite de resultados
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Página
 *     responses:
 *       200:
 *         description: Lista de histórias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     stories:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Story'
 *                     pagination:
 *                       type: object
 */
router.get('/stories', getUserStories)

/**
 * @swagger
 * /api/tasks/stories/{id}:
 *   get:
 *     tags:
 *       - Gamification
 *     summary: 'Get a specific story by ID'
 *     operationId: getStoryById
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da história
 *     responses:
 *       200:
 *         description: Detalhes da história
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     story:
 *                       $ref: '#/components/schemas/Story'
 */
router.get('/stories/:id', getStory)

module.exports = router
