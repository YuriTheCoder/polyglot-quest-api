const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Função para gerar JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  })
}

// @desc    Registrar novo usuário
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  const { name, email, password, role } = req.body

  // Verificar se usuário já existe
  const existingUser = await User.findByEmail(email)
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: 'Usuário já existe com este email'
    })
  }

  // Criar usuário
  const user = await User.create({
    name,
    email,
    password,
    role: role || 'user'
  })

  // Gerar token
  const token = generateToken(user._id)

  res.status(201).json({
    success: true,
    message: 'Usuário registrado com sucesso',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      },
      token
    }
  })
}

// @desc    Login de usuário
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  const { email, password } = req.body

  // Buscar usuário com senha
  const user = await User.findOne({ email: email.toLowerCase() }).select('+password')

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Credenciais inválidas'
    })
  }

  // Verificar se usuário está ativo
  if (!user.isActive) {
    return res.status(401).json({
      success: false,
      message: 'Conta desativada. Entre em contato com o administrador'
    })
  }

  // Verificar senha
  const isPasswordValid = await user.comparePassword(password)

  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: 'Credenciais inválidas'
    })
  }

  // Atualizar último login
  await user.updateLastLogin()

  // Gerar token
  const token = generateToken(user._id)

  res.json({
    success: true,
    message: 'Login realizado com sucesso',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin
      },
      token
    }
  })
}

// @desc    Obter perfil do usuário logado
// @route   GET /api/auth/profile
// @access  Private
const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id)

  res.json({
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    }
  })
}

// @desc    Atualizar perfil do usuário
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res) => {
  const { name, email } = req.body

  const user = await User.findById(req.user.id)

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Verificar se email já está em uso por outro usuário
  if (email && email !== user.email) {
    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Este email já está em uso'
      })
    }
  }

  // Atualizar campos
  if (name) user.name = name
  if (email) user.email = email

  await user.save()

  res.json({
    success: true,
    message: 'Perfil atualizado com sucesso',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        updatedAt: user.updatedAt
      }
    }
  })
}

// @desc    Alterar senha
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body

  const user = await User.findById(req.user.id).select('+password')

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Verificar senha atual
  const isCurrentPasswordValid = await user.comparePassword(currentPassword)

  if (!isCurrentPasswordValid) {
    return res.status(400).json({
      success: false,
      message: 'Senha atual incorreta'
    })
  }

  // Verificar se nova senha é diferente da atual
  const isSamePassword = await user.comparePassword(newPassword)

  if (isSamePassword) {
    return res.status(400).json({
      success: false,
      message: 'A nova senha deve ser diferente da senha atual'
    })
  }

  // Atualizar senha
  user.password = newPassword
  await user.save()

  res.json({
    success: true,
    message: 'Senha alterada com sucesso'
  })
}

// @desc    Logout (invalidar token - implementação básica)
// @route   POST /api/auth/logout
// @access  Private
const logout = async (req, res) => {
  // Em uma implementação real, você poderia manter uma blacklist de tokens
  // ou usar Redis para gerenciar tokens ativos
  res.json({
    success: true,
    message: 'Logout realizado com sucesso'
  })
}

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  logout
}
