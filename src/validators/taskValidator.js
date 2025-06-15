const Joi = require('joi')

// Validação para criação de tarefa
const createTaskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .trim()
    .required()
    .messages({
      'string.empty': 'Título é obrigatório',
      'string.min': 'Título deve ter pelo menos 3 caracteres',
      'string.max': 'Título deve ter no máximo 100 caracteres',
      'any.required': 'Título é obrigatório'
    }),

  description: Joi.string()
    .min(10)
    .max(500)
    .trim()
    .required()
    .messages({
      'string.empty': 'Descrição é obrigatória',
      'string.min': 'Descrição deve ter pelo menos 10 caracteres',
      'string.max': 'Descrição deve ter no máximo 500 caracteres',
      'any.required': 'Descrição é obrigatória'
    }),

  status: Joi.string()
    .valid('pending', 'in_progress', 'completed')
    .default('pending')
    .messages({
      'any.only': 'Status deve ser: pending, in_progress ou completed'
    }),

  priority: Joi.string()
    .valid('low', 'medium', 'high')
    .default('medium')
    .messages({
      'any.only': 'Prioridade deve ser: low, medium ou high'
    }),

  dueDate: Joi.date()
    .min('now')
    .iso()
    .messages({
      'date.min': 'Data de vencimento deve ser no futuro',
      'date.format': 'Data de vencimento deve estar no formato ISO 8601'
    }),

  tags: Joi.array()
    .items(
      Joi.string()
        .trim()
        .max(20)
        .messages({
          'string.max': 'Tag deve ter no máximo 20 caracteres'
        })
    )
    .max(10)
    .messages({
      'array.max': 'Máximo de 10 tags permitidas'
    })
})

// Validação para atualização de tarefa
const updateTaskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .trim()
    .messages({
      'string.min': 'Título deve ter pelo menos 3 caracteres',
      'string.max': 'Título deve ter no máximo 100 caracteres'
    }),

  description: Joi.string()
    .min(10)
    .max(500)
    .trim()
    .messages({
      'string.min': 'Descrição deve ter pelo menos 10 caracteres',
      'string.max': 'Descrição deve ter no máximo 500 caracteres'
    }),

  status: Joi.string()
    .valid('pending', 'in_progress', 'completed')
    .messages({
      'any.only': 'Status deve ser: pending, in_progress ou completed'
    }),

  priority: Joi.string()
    .valid('low', 'medium', 'high')
    .messages({
      'any.only': 'Prioridade deve ser: low, medium ou high'
    }),

  dueDate: Joi.date()
    .min('now')
    .iso()
    .allow(null)
    .messages({
      'date.min': 'Data de vencimento deve ser no futuro',
      'date.format': 'Data de vencimento deve estar no formato ISO 8601'
    }),

  tags: Joi.array()
    .items(
      Joi.string()
        .trim()
        .max(20)
        .messages({
          'string.max': 'Tag deve ter no máximo 20 caracteres'
        })
    )
    .max(10)
    .messages({
      'array.max': 'Máximo de 10 tags permitidas'
    })
}).min(1).messages({
  'object.min': 'Pelo menos um campo deve ser fornecido para atualização'
})

// Validação para query parameters de listagem
const listTasksQuerySchema = Joi.object({
  status: Joi.string()
    .valid('pending', 'in_progress', 'completed')
    .messages({
      'any.only': 'Status deve ser: pending, in_progress ou completed'
    }),

  priority: Joi.string()
    .valid('low', 'medium', 'high')
    .messages({
      'any.only': 'Prioridade deve ser: low, medium ou high'
    }),

  page: Joi.number()
    .integer()
    .min(1)
    .default(1)
    .messages({
      'number.base': 'Página deve ser um número',
      'number.integer': 'Página deve ser um número inteiro',
      'number.min': 'Página deve ser maior que 0'
    }),

  limit: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(10)
    .messages({
      'number.base': 'Limite deve ser um número',
      'number.integer': 'Limite deve ser um número inteiro',
      'number.min': 'Limite deve ser maior que 0',
      'number.max': 'Limite deve ser no máximo 100'
    }),

  sortBy: Joi.string()
    .valid('createdAt', 'updatedAt', 'dueDate', 'priority', 'title')
    .default('createdAt')
    .messages({
      'any.only': 'Ordenação deve ser por: createdAt, updatedAt, dueDate, priority ou title'
    }),

  sortOrder: Joi.string()
    .valid('asc', 'desc')
    .default('desc')
    .messages({
      'any.only': 'Ordem deve ser: asc ou desc'
    }),

  search: Joi.string()
    .trim()
    .max(100)
    .messages({
      'string.max': 'Termo de busca deve ter no máximo 100 caracteres'
    })
})

// Middleware de validação
const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    const data = source === 'query' ? req.query : req.body

    const { error, value } = schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
      convert: true
    })

    if (error) {
      const errors = error.details.map(detail => detail.message)
      return res.status(400).json({
        success: false,
        message: 'Dados de entrada inválidos',
        errors
      })
    }

    // Substitui os dados pelos valores validados e sanitizados
    if (source === 'query') {
      req.query = value
    } else {
      req.body = value
    }

    next()
  }
}

module.exports = {
  validateCreateTask: validate(createTaskSchema),
  validateUpdateTask: validate(updateTaskSchema),
  validateListTasksQuery: validate(listTasksQuerySchema, 'query')
}
