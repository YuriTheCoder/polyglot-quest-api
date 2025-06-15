const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Middleware para verificar token JWT
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token de acesso não fornecido'
      })
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' do início

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token de acesso não fornecido'
      })
    }

    // Verificar e decodificar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Buscar o usuário no banco de dados
    const user = await User.findById(decoded.id)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido - usuário não encontrado'
      })
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Conta de usuário desativada'
      })
    }

    // Adicionar usuário ao objeto request
    req.user = user
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      })
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado'
      })
    }

    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    })
  }
}

// Middleware para verificar se o usuário é admin
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado - privilégios de administrador necessários'
    })
  }
  next()
}

// Middleware para verificar se o usuário pode acessar o recurso
const requireOwnershipOrAdmin = (resourceUserIdField = 'userId') => {
  return (req, res, next) => {
    const resourceUserId = req.params[resourceUserIdField] || req.body[resourceUserIdField]

    // Admin pode acessar qualquer recurso
    if (req.user.role === 'admin') {
      return next()
    }

    // Usuário só pode acessar seus próprios recursos
    if (req.user.id.toString() !== resourceUserId) {
      return res.status(403).json({
        success: false,
        message: 'Acesso negado - você só pode acessar seus próprios recursos'
      })
    }

    next()
  }
}

// Middleware opcional de autenticação (não falha se não houver token)
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next()
    }

    const token = authHeader.substring(7)

    if (!token) {
      return next()
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)

    if (user && user.isActive) {
      req.user = user
    }

    next()
  } catch (error) {
    // Em caso de erro, continua sem autenticação
    next()
  }
}

module.exports = {
  authenticate,
  requireAdmin,
  requireOwnershipOrAdmin,
  optionalAuth
}
