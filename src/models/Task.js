const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true,
    minlength: [3, 'Título deve ter pelo menos 3 caracteres'],
    maxlength: [100, 'Título deve ter no máximo 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    trim: true,
    minlength: [10, 'Descrição deve ter pelo menos 10 caracteres'],
    maxlength: [500, 'Descrição deve ter no máximo 500 caracteres']
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in_progress', 'completed'],
      message: 'Status deve ser: pending, in_progress ou completed'
    },
    default: 'pending'
  },
  priority: {
    type: String,
    enum: {
      values: ['low', 'medium', 'high'],
      message: 'Prioridade deve ser: low, medium ou high'
    },
    default: 'medium'
  },
  dueDate: {
    type: Date,
    validate: {
      validator: function (value) {
        // Se dueDate for fornecida, deve ser no futuro
        return !value || value > new Date()
      },
      message: 'Data de vencimento deve ser no futuro'
    }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'ID do usuário é obrigatório']
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [20, 'Tag deve ter no máximo 20 caracteres']
  }],
  completedAt: {
    type: Date
  },
  // 🎮 GAMIFICATION FIELDS
  gamification: {
    estimatedTime: {
      type: String,
      default: '30min',
      match: [/^\d+(min|h)$/, 'Formato inválido. Use: 30min, 1h, 2h30min']
    },
    xpReward: {
      type: Number,
      min: [5, 'XP mínimo é 5'],
      max: [100, 'XP máximo é 100']
    },
    questData: {
      questTitle: String,
      questDescription: String,
      difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'medium'
      },
      category: {
        type: String,
        enum: ['combat', 'exploration', 'crafting', 'social'],
        default: 'exploration'
      },
      storyId: String // ID da história gerada pela IA
    },
    completionTime: Number // Tempo real gasto em minutos
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      return ret
    }
  }
})

// Indexes para melhorar performance das consultas
taskSchema.index({ userId: 1 })
taskSchema.index({ status: 1 })
taskSchema.index({ priority: 1 })
taskSchema.index({ dueDate: 1 })
taskSchema.index({ createdAt: -1 })

// Index composto para consultas comuns
taskSchema.index({ userId: 1, status: 1 })
taskSchema.index({ userId: 1, priority: 1 })

// Middleware para definir completedAt quando status muda para completed
taskSchema.pre('save', function (next) {
  if (this.isModified('status')) {
    if (this.status === 'completed' && !this.completedAt) {
      this.completedAt = new Date()
    } else if (this.status !== 'completed') {
      this.completedAt = undefined
    }
  }
  next()
})

// Método estático para buscar tarefas por usuário
taskSchema.statics.findByUser = function (userId, filters = {}) {
  const query = { userId, ...filters }
  return this.find(query).sort({ createdAt: -1 })
}

// Método estático para buscar tarefas por status
taskSchema.statics.findByStatus = function (userId, status) {
  return this.find({ userId, status }).sort({ createdAt: -1 })
}

// Método estático para buscar tarefas vencidas
taskSchema.statics.findOverdue = function (userId) {
  return this.find({
    userId,
    dueDate: { $lt: new Date() },
    status: { $ne: 'completed' }
  }).sort({ dueDate: 1 })
}

// Método estático para estatísticas do usuário
taskSchema.statics.getUserStats = async function (userId) {
  const stats = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ])

  const result = {
    total: 0,
    pending: 0,
    in_progress: 0,
    completed: 0
  }

  stats.forEach(stat => {
    result[stat._id] = stat.count
    result.total += stat.count
  })

  return result
}

// Virtual para verificar se a tarefa está vencida
taskSchema.virtual('isOverdue').get(function () {
  return this.dueDate && this.dueDate < new Date() && this.status !== 'completed'
})

// Incluir virtuals na serialização JSON
taskSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Task', taskSchema)
