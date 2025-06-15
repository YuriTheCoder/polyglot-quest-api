const request = require('supertest')
const app = require('../src/server')
const User = require('../src/models/User')
const Task = require('../src/models/Task')

describe('Tasks Endpoints', () => {
  let authToken
  let userId
  let adminToken
  let adminId

  beforeEach(async () => {
    // Criar usuário normal
    const userData = {
      name: 'João Silva',
      email: 'joao@email.com',
      password: '123456'
    }

    const userResponse = await request(app)
      .post('/api/auth/register')
      .send(userData)

    authToken = userResponse.body.data.token
    userId = userResponse.body.data.user.id

    // Criar usuário admin
    const adminData = {
      name: 'Admin User',
      email: 'admin@email.com',
      password: '123456',
      role: 'admin'
    }

    const adminResponse = await request(app)
      .post('/api/auth/register')
      .send(adminData)

    adminToken = adminResponse.body.data.token
    adminId = adminResponse.body.data.user.id
  })

  describe('POST /api/tasks', () => {
    it('should create a new task successfully', async () => {
      const taskData = {
        title: 'Implementar autenticação JWT',
        description: 'Implementar sistema de autenticação usando JWT com middleware de verificação',
        priority: 'high',
        tags: ['backend', 'auth', 'jwt']
      }

      const response = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .send(taskData)
        .expect(201)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Tarefa criada com sucesso')
      expect(response.body.data.task.title).toBe(taskData.title)
      expect(response.body.data.task.description).toBe(taskData.description)
      expect(response.body.data.task.priority).toBe(taskData.priority)
      expect(response.body.data.task.status).toBe('pending')
      expect(response.body.data.task.userId).toBe(userId)
      expect(response.body.data.task.tags).toEqual(taskData.tags)
    })

    it('should not create task without authentication', async () => {
      const taskData = {
        title: 'Implementar autenticação JWT',
        description: 'Implementar sistema de autenticação usando JWT com middleware de verificação'
      }

      const response = await request(app)
        .post('/api/tasks')
        .send(taskData)
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Token de acesso não fornecido')
    })

    it('should not create task with invalid data', async () => {
      const taskData = {
        title: 'Ab', // Muito curto
        description: 'Desc' // Muito curto
      }

      const response = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .send(taskData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.errors).toContain('Título deve ter pelo menos 3 caracteres')
      expect(response.body.errors).toContain('Descrição deve ter pelo menos 10 caracteres')
    })
  })

  describe('GET /api/tasks', () => {
    beforeEach(async () => {
      // Criar algumas tarefas para teste
      const tasks = [
        {
          title: 'Tarefa 1',
          description: 'Descrição da tarefa 1',
          status: 'pending',
          priority: 'high',
          userId
        },
        {
          title: 'Tarefa 2',
          description: 'Descrição da tarefa 2',
          status: 'in_progress',
          priority: 'medium',
          userId
        },
        {
          title: 'Tarefa 3',
          description: 'Descrição da tarefa 3',
          status: 'completed',
          priority: 'low',
          userId
        }
      ]

      await Task.insertMany(tasks)
    })

    it('should get all user tasks', async () => {
      const response = await request(app)
        .get('/api/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.tasks).toHaveLength(3)
      expect(response.body.data.pagination.total).toBe(3)
      expect(response.body.data.pagination.current).toBe(1)
    })

    it('should filter tasks by status', async () => {
      const response = await request(app)
        .get('/api/tasks?status=pending')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.tasks).toHaveLength(1)
      expect(response.body.data.tasks[0].status).toBe('pending')
    })

    it('should filter tasks by priority', async () => {
      const response = await request(app)
        .get('/api/tasks?priority=high')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.tasks).toHaveLength(1)
      expect(response.body.data.tasks[0].priority).toBe('high')
    })

    it('should search tasks by title', async () => {
      const response = await request(app)
        .get('/api/tasks?search=Tarefa 1')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.tasks).toHaveLength(1)
      expect(response.body.data.tasks[0].title).toBe('Tarefa 1')
    })

    it('should paginate results', async () => {
      const response = await request(app)
        .get('/api/tasks?page=1&limit=2')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.tasks).toHaveLength(2)
      expect(response.body.data.pagination.current).toBe(1)
      expect(response.body.data.pagination.pages).toBe(2)
    })
  })

  describe('GET /api/tasks/:id', () => {
    let taskId

    beforeEach(async () => {
      const task = new Task({
        title: 'Tarefa Teste',
        description: 'Descrição da tarefa teste',
        userId
      })
      const savedTask = await task.save()
      taskId = savedTask._id.toString()
    })

    it('should get specific task', async () => {
      const response = await request(app)
        .get(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.task.id).toBe(taskId)
      expect(response.body.data.task.title).toBe('Tarefa Teste')
    })

    it('should not get task from another user', async () => {
      // Criar outro usuário
      const otherUserData = {
        name: 'Outro Usuário',
        email: 'outro@email.com',
        password: '123456'
      }

      const otherUserResponse = await request(app)
        .post('/api/auth/register')
        .send(otherUserData)

      const otherUserToken = otherUserResponse.body.data.token

      const response = await request(app)
        .get(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${otherUserToken}`)
        .expect(403)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Acesso negado')
    })

    it('should return 404 for non-existent task', async () => {
      const fakeId = '507f1f77bcf86cd799439011'

      const response = await request(app)
        .get(`/api/tasks/${fakeId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Tarefa não encontrada')
    })
  })

  describe('PUT /api/tasks/:id', () => {
    let taskId

    beforeEach(async () => {
      const task = new Task({
        title: 'Tarefa Original',
        description: 'Descrição original da tarefa',
        userId
      })
      const savedTask = await task.save()
      taskId = savedTask._id.toString()
    })

    it('should update task successfully', async () => {
      const updateData = {
        title: 'Tarefa Atualizada',
        description: 'Descrição atualizada da tarefa',
        status: 'in_progress',
        priority: 'high'
      }

      const response = await request(app)
        .put(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Tarefa atualizada com sucesso')
      expect(response.body.data.task.title).toBe(updateData.title)
      expect(response.body.data.task.description).toBe(updateData.description)
      expect(response.body.data.task.status).toBe(updateData.status)
      expect(response.body.data.task.priority).toBe(updateData.priority)
    })

    it('should not update task with invalid data', async () => {
      const updateData = {
        title: 'Ab', // Muito curto
        priority: 'invalid' // Prioridade inválida
      }

      const response = await request(app)
        .put(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.errors).toContain('Título deve ter pelo menos 3 caracteres')
      expect(response.body.errors).toContain('Prioridade deve ser: low, medium ou high')
    })
  })

  describe('PATCH /api/tasks/:id/complete', () => {
    let taskId

    beforeEach(async () => {
      const task = new Task({
        title: 'Tarefa para Completar',
        description: 'Descrição da tarefa para completar',
        status: 'in_progress',
        userId
      })
      const savedTask = await task.save()
      taskId = savedTask._id.toString()
    })

    it('should mark task as completed', async () => {
      const response = await request(app)
        .patch(`/api/tasks/${taskId}/complete`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Tarefa marcada como concluída')
      expect(response.body.data.task.status).toBe('completed')
      expect(response.body.data.task.completedAt).toBeDefined()
    })

    it('should not complete already completed task', async () => {
      // Primeiro, completar a tarefa
      await request(app)
        .patch(`/api/tasks/${taskId}/complete`)
        .set('Authorization', `Bearer ${authToken}`)

      // Tentar completar novamente
      const response = await request(app)
        .patch(`/api/tasks/${taskId}/complete`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Tarefa já está concluída')
    })
  })

  describe('DELETE /api/tasks/:id', () => {
    let taskId

    beforeEach(async () => {
      const task = new Task({
        title: 'Tarefa para Deletar',
        description: 'Descrição da tarefa para deletar',
        userId
      })
      const savedTask = await task.save()
      taskId = savedTask._id.toString()
    })

    it('should delete task successfully', async () => {
      const response = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Tarefa deletada com sucesso')

      // Verificar se a tarefa foi realmente deletada
      const deletedTask = await Task.findById(taskId)
      expect(deletedTask).toBeNull()
    })

    it('should not delete task from another user', async () => {
      // Criar outro usuário
      const otherUserData = {
        name: 'Outro Usuário',
        email: 'outro@email.com',
        password: '123456'
      }

      const otherUserResponse = await request(app)
        .post('/api/auth/register')
        .send(otherUserData)

      const otherUserToken = otherUserResponse.body.data.token

      const response = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', `Bearer ${otherUserToken}`)
        .expect(403)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Acesso negado')
    })
  })

  describe('GET /api/tasks/stats', () => {
    beforeEach(async () => {
      // Criar tarefas com diferentes status
      const tasks = [
        { title: 'Task 1', description: 'Description 1', status: 'pending', userId },
        { title: 'Task 2', description: 'Description 2', status: 'pending', userId },
        { title: 'Task 3', description: 'Description 3', status: 'in_progress', userId },
        { title: 'Task 4', description: 'Description 4', status: 'completed', userId, completedAt: new Date() }
      ]

      await Task.insertMany(tasks)
    })

    it('should get user task statistics', async () => {
      const response = await request(app)
        .get('/api/tasks/stats')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.stats.total).toBe(4)
      expect(response.body.data.stats.pending).toBe(2)
      expect(response.body.data.stats.in_progress).toBe(1)
      expect(response.body.data.stats.completed).toBe(1)
    })
  })
}) 