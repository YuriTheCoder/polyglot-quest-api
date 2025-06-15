const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'Título deve ter no máximo 100 caracteres']
  },
  story: {
    type: String,
    required: true,
    maxlength: [1000, 'História deve ter no máximo 1000 caracteres']
  },
  theme: {
    type: String,
    enum: ['medieval', 'scifi', 'modern', 'fantasy'],
    required: true
  },
  quests: [{
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
      required: true
    },
    questTitle: {
      type: String,
      required: true,
      maxlength: [100, 'Título da quest deve ter no máximo 100 caracteres']
    },
    questDescription: {
      type: String,
      required: true,
      maxlength: [300, 'Descrição da quest deve ter no máximo 300 caracteres']
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true
    },
    xp: {
      type: Number,
      required: true,
      min: [5, 'XP mínimo é 5'],
      max: [100, 'XP máximo é 100']
    },
    category: {
      type: String,
      enum: ['combat', 'exploration', 'crafting', 'social'],
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: Date
  }],
  totalXP: {
    type: Number,
    required: true,
    min: [0, 'XP total não pode ser negativo']
  },
  estimatedPlayTime: {
    type: String,
    required: true
  },
  aiProvider: {
    type: String,
    enum: ['openai', 'gemini'],
    required: true
  },
  generatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  completedQuests: {
    type: Number,
    default: 0
  },
  totalQuests: {
    type: Number,
    required: true
  },
  // Metadados para análise
  metadata: {
    promptTokens: Number,
    responseTokens: Number,
    generationTime: Number, // em milissegundos
    fallback: { type: Boolean, default: false }
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

// Indexes para performance
storySchema.index({ userId: 1 })
storySchema.index({ createdAt: -1 })
storySchema.index({ theme: 1 })
storySchema.index({ isActive: 1 })
storySchema.index({ userId: 1, isActive: 1 })

// Virtual para calcular progresso da história
storySchema.virtual('progress').get(function () {
  if (this.totalQuests === 0) return 0
  return Math.round((this.completedQuests / this.totalQuests) * 100)
})

// Virtual para verificar se a história está completa
storySchema.virtual('isCompleted').get(function () {
  return this.completedQuests === this.totalQuests
})

// Método para marcar quest como completa
storySchema.methods.completeQuest = function (questId) {
  const quest = this.quests.id(questId)
  if (quest && !quest.completed) {
    quest.completed = true
    quest.completedAt = new Date()
    this.completedQuests += 1

    // Se todas as quests foram completadas, marcar história como inativa
    if (this.completedQuests === this.totalQuests) {
      this.isActive = false
    }

    return this.save()
  }
  return Promise.resolve(this)
}

// Método estático para buscar histórias ativas do usuário
storySchema.statics.findActiveByUser = function (userId) {
  return this.find({ userId, isActive: true }).sort({ createdAt: -1 })
}

// Método estático para estatísticas de histórias do usuário
storySchema.statics.getUserStoryStats = async function (userId) {
  const stats = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: null,
        totalStories: { $sum: 1 },
        completedStories: {
          $sum: {
            $cond: [{ $eq: ['$completedQuests', '$totalQuests'] }, 1, 0]
          }
        },
        totalXPEarned: { $sum: '$totalXP' },
        averageProgress: { $avg: { $divide: ['$completedQuests', '$totalQuests'] } },
        favoriteTheme: { $first: '$theme' } // Simplificado, idealmente seria o mais comum
      }
    }
  ])

  return stats[0] || {
    totalStories: 0,
    completedStories: 0,
    totalXPEarned: 0,
    averageProgress: 0,
    favoriteTheme: null
  }
}

// Incluir virtuals na serialização JSON
storySchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Story', storySchema)
