const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  error.message = err.message

  // Log do erro para debugging
  // if (process.env.NODE_ENV !== 'test') {
  //   console.error('❌ Error:', err)
  // }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Recurso não encontrado'
    error = { message, statusCode: 404 }
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    let message = 'Dados duplicados'

    // Extrair campo duplicado
    const field = Object.keys(err.keyValue)[0]
    if (field === 'email') {
      message = 'Este email já está em uso'
    }

    error = { message, statusCode: 400 }
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ')
    error = { message, statusCode: 400 }
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Token inválido'
    error = { message, statusCode: 401 }
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expirado'
    error = { message, statusCode: 401 }
  }

  // Joi validation errors
  if (err.isJoi) {
    const message = err.details.map(detail => detail.message).join(', ')
    error = { message, statusCode: 400 }
  }

  // Rate limit errors
  if (err.status === 429) {
    const message = 'Muitas tentativas. Tente novamente mais tarde.'
    error = { message, statusCode: 429 }
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

module.exports = errorHandler
