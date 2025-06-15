const Joi = require('joi')

// Validação para registro de usuário
const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .messages({
      'string.empty': 'Nome é obrigatório',
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome deve ter no máximo 50 caracteres',
      'any.required': 'Nome é obrigatório'
    }),

  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required()
    .messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email deve ter um formato válido',
      'any.required': 'Email é obrigatório'
    }),

  password: Joi.string()
    .min(6)
    .max(128)
    .required()
    .messages({
      'string.empty': 'Senha é obrigatória',
      'string.min': 'Senha deve ter pelo menos 6 caracteres',
      'string.max': 'Senha deve ter no máximo 128 caracteres',
      'any.required': 'Senha é obrigatória'
    }),

  role: Joi.string()
    .valid('user', 'admin')
    .default('user')
    .messages({
      'any.only': 'Role deve ser user ou admin'
    })
})

// Validação para login
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required()
    .messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email deve ter um formato válido',
      'any.required': 'Email é obrigatório'
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Senha é obrigatória',
      'any.required': 'Senha é obrigatória'
    })
})

// Validação para alteração de senha
const changePasswordSchema = Joi.object({
  currentPassword: Joi.string()
    .required()
    .messages({
      'string.empty': 'Senha atual é obrigatória',
      'any.required': 'Senha atual é obrigatória'
    }),

  newPassword: Joi.string()
    .min(6)
    .max(128)
    .required()
    .messages({
      'string.empty': 'Nova senha é obrigatória',
      'string.min': 'Nova senha deve ter pelo menos 6 caracteres',
      'string.max': 'Nova senha deve ter no máximo 128 caracteres',
      'any.required': 'Nova senha é obrigatória'
    })
})

// Middleware de validação
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    })

    if (error) {
      const errors = error.details.map(detail => detail.message)
      return res.status(400).json({
        success: false,
        message: 'Dados de entrada inválidos',
        errors
      })
    }

    // Substitui req.body pelos dados validados e sanitizados
    req.body = value
    next()
  }
}

module.exports = {
  validateRegister: validate(registerSchema),
  validateLogin: validate(loginSchema),
  validateChangePassword: validate(changePasswordSchema)
}
