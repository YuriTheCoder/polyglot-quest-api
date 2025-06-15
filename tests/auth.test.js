const request = require('supertest')
const app = require('../src/server')
const User = require('../src/models/User')

describe('Auth Endpoints', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Usuário registrado com sucesso')
      expect(response.body.data.user.email).toBe(userData.email)
      expect(response.body.data.user.name).toBe(userData.name)
      expect(response.body.data.user.role).toBe('user')
      expect(response.body.data.token).toBeDefined()
      expect(response.body.data.user.password).toBeUndefined()
    })

    it('should not register user with invalid email', async () => {
      const userData = {
        name: 'João Silva',
        email: 'invalid-email',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.errors).toContain('Email deve ter um formato válido')
    })

    it('should not register user with short password', async () => {
      const userData = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123'
      }

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.errors).toContain('Senha deve ter pelo menos 6 caracteres')
    })

    it('should not register user with duplicate email', async () => {
      const userData = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123456'
      }

      // Primeiro registro
      await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201)

      // Segundo registro com mesmo email
      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Usuário já existe com este email')
    })
  })

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      // Criar usuário para testes de login
      const user = new User({
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123456'
      })
      await user.save()
    })

    it('should login user with valid credentials', async () => {
      const loginData = {
        email: 'joao@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Login realizado com sucesso')
      expect(response.body.data.user.email).toBe(loginData.email)
      expect(response.body.data.token).toBeDefined()
      expect(response.body.data.user.password).toBeUndefined()
    })

    it('should not login with invalid email', async () => {
      const loginData = {
        email: 'invalid@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Credenciais inválidas')
    })

    it('should not login with invalid password', async () => {
      const loginData = {
        email: 'joao@email.com',
        password: 'wrongpassword'
      }

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Credenciais inválidas')
    })

    it('should not login inactive user', async () => {
      // Desativar usuário
      await User.findOneAndUpdate(
        { email: 'joao@email.com' },
        { isActive: false }
      )

      const loginData = {
        email: 'joao@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Conta desativada. Entre em contato com o administrador')
    })
  })

  describe('GET /api/auth/profile', () => {
    let authToken
    let userId

    beforeEach(async () => {
      // Registrar usuário e obter token
      const userData = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)

      authToken = response.body.data.token
      userId = response.body.data.user.id
    })

    it('should get user profile with valid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.data.user.id).toBe(userId)
      expect(response.body.data.user.email).toBe('joao@email.com')
      expect(response.body.data.user.password).toBeUndefined()
    })

    it('should not get profile without token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Token de acesso não fornecido')
    })

    it('should not get profile with invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Token inválido')
    })
  })

  describe('PUT /api/auth/change-password', () => {
    let authToken

    beforeEach(async () => {
      // Registrar usuário e obter token
      const userData = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: '123456'
      }

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)

      authToken = response.body.data.token
    })

    it('should change password with valid data', async () => {
      const passwordData = {
        currentPassword: '123456',
        newPassword: 'newPassword123'
      }

      const response = await request(app)
        .put('/api/auth/change-password')
        .set('Authorization', `Bearer ${authToken}`)
        .send(passwordData)
        .expect(200)

      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Senha alterada com sucesso')

      // Verificar se pode fazer login com nova senha
      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'joao@email.com',
          password: 'newPassword123'
        })
        .expect(200)

      expect(loginResponse.body.success).toBe(true)
    })

    it('should not change password with wrong current password', async () => {
      const passwordData = {
        currentPassword: 'wrongpassword',
        newPassword: 'newPassword123'
      }

      const response = await request(app)
        .put('/api/auth/change-password')
        .set('Authorization', `Bearer ${authToken}`)
        .send(passwordData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('Senha atual incorreta')
    })

    it('should not change password to same password', async () => {
      const passwordData = {
        currentPassword: '123456',
        newPassword: '123456'
      }

      const response = await request(app)
        .put('/api/auth/change-password')
        .set('Authorization', `Bearer ${authToken}`)
        .send(passwordData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.message).toBe('A nova senha deve ser diferente da senha atual')
    })
  })
}) 