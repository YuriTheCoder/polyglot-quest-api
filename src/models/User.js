const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
    minlength: [2, 'Nome deve ter pelo menos 2 caracteres'],
    maxlength: [50, 'Nome deve ter no máximo 50 caracteres']
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor, insira um email válido'
    ]
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    minlength: [6, 'Senha deve ter pelo menos 6 caracteres'],
    select: false // Por padrão, não incluir a senha nas consultas
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  },
  // 🎮 GAMIFICATION FIELDS
  gamification: {
    level: { type: Number, default: 1 },
    totalXP: { type: Number, default: 0 },
    tasksCompleted: { type: Number, default: 0 },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastTaskCompletedAt: Date,
    badges: [{ type: String }], // Array de IDs dos badges conquistados

    // Estatísticas por categoria de quest
    categoryStats: {
      combat: {
        tasksCompleted: { type: Number, default: 0 },
        totalXP: { type: Number, default: 0 },
        averageXP: { type: Number, default: 0 }
      },
      exploration: {
        tasksCompleted: { type: Number, default: 0 },
        totalXP: { type: Number, default: 0 },
        averageXP: { type: Number, default: 0 }
      },
      crafting: {
        tasksCompleted: { type: Number, default: 0 },
        totalXP: { type: Number, default: 0 },
        averageXP: { type: Number, default: 0 }
      },
      social: {
        tasksCompleted: { type: Number, default: 0 },
        totalXP: { type: Number, default: 0 },
        averageXP: { type: Number, default: 0 }
      }
    },

    // Preferências de gamificação
    preferences: {
      class: {
        type: String,
        enum: ['Aventureiro', 'Guerreiro', 'Mago', 'Ladino', 'Paladino', 'Explorador'],
        default: 'Aventureiro'
      },
      theme: {
        type: String,
        enum: ['medieval', 'scifi', 'modern', 'fantasy'],
        default: 'medieval'
      },
      autoShare: { type: Boolean, default: false },
      shareOnLevelUp: { type: Boolean, default: true },
      shareOnBadge: { type: Boolean, default: true }
    },

    // Estatísticas sociais
    storiesGenerated: { type: Number, default: 0 },
    sharesCount: { type: Number, default: 0 },

    // Histórico de conquistas recentes
    recentAchievements: [{
      type: { type: String, enum: ['level_up', 'badge_earned', 'streak_milestone'] },
      data: mongoose.Schema.Types.Mixed,
      achievedAt: { type: Date, default: Date.now }
    }]
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      delete ret.password
      return ret
    }
  }
})

// Index para melhorar performance das consultas
userSchema.index({ email: 1 })
userSchema.index({ role: 1 })

// Middleware para hash da senha antes de salvar
userSchema.pre('save', async function (next) {
  // Só fazer hash se a senha foi modificada
  if (!this.isModified('password')) return next()

  try {
    // Hash da senha com salt de 12
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

// Método para comparar senhas
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

// Método para atualizar último login
userSchema.methods.updateLastLogin = function () {
  this.lastLogin = new Date()
  return this.save()
}

// Método estático para encontrar usuário por email
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email.toLowerCase() })
}

// Middleware para remover tarefas associadas quando usuário é removido
userSchema.pre('remove', async function (next) {
  try {
    await this.model('Task').deleteMany({ userId: this._id })
    next()
  } catch (error) {
    next(error)
  }
})

module.exports = mongoose.model('User', userSchema)
