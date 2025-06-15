class GamificationService {
  constructor () {
    this.xpPerLevel = parseInt(process.env.XP_PER_LEVEL) || 100
    this.badges = this.initializeBadges()
  }

  initializeBadges () {
    return {
      // Badges de Level
      'first-steps': { name: 'Primeiros Passos', description: 'Complete sua primeira quest', icon: '🌟', requirement: { type: 'level', value: 1 } },
      apprentice: { name: 'Aprendiz', description: 'Alcance o nível 5', icon: '🎓', requirement: { type: 'level', value: 5 } },
      journeyman: { name: 'Jornaleiro', description: 'Alcance o nível 10', icon: '⚔️', requirement: { type: 'level', value: 10 } },
      expert: { name: 'Especialista', description: 'Alcance o nível 25', icon: '🏆', requirement: { type: 'level', value: 25 } },
      master: { name: 'Mestre', description: 'Alcance o nível 50', icon: '👑', requirement: { type: 'level', value: 50 } },
      legend: { name: 'Lenda', description: 'Alcance o nível 100', icon: '🌟', requirement: { type: 'level', value: 100 } },

      // Badges de Produtividade
      'task-slayer': { name: 'Caçador de Tarefas', description: 'Complete 10 tarefas', icon: '⚡', requirement: { type: 'tasks_completed', value: 10 } },
      'productivity-beast': { name: 'Fera da Produtividade', description: 'Complete 50 tarefas', icon: '🔥', requirement: { type: 'tasks_completed', value: 50 } },
      unstoppable: { name: 'Imparável', description: 'Complete 100 tarefas', icon: '💪', requirement: { type: 'tasks_completed', value: 100 } },

      // Badges de Streak
      consistent: { name: 'Consistente', description: 'Complete tarefas por 7 dias seguidos', icon: '📅', requirement: { type: 'streak', value: 7 } },
      dedicated: { name: 'Dedicado', description: 'Complete tarefas por 30 dias seguidos', icon: '🎯', requirement: { type: 'streak', value: 30 } },
      relentless: { name: 'Implacável', description: 'Complete tarefas por 100 dias seguidos', icon: '🔥', requirement: { type: 'streak', value: 100 } },

      // Badges Especiais
      'speed-demon': { name: 'Demônio da Velocidade', description: 'Complete 5 tarefas em 1 hora', icon: '💨', requirement: { type: 'speed', value: 5 } },
      'night-owl': { name: 'Coruja Noturna', description: 'Complete tarefas após 22h', icon: '🦉', requirement: { type: 'time', value: 'night' } },
      'early-bird': { name: 'Madrugador', description: 'Complete tarefas antes das 6h', icon: '🐦', requirement: { type: 'time', value: 'early' } },
      perfectionist: { name: 'Perfeccionista', description: 'Complete 20 tarefas de alta prioridade', icon: '💎', requirement: { type: 'high_priority', value: 20 } },

      // Badges Sociais
      storyteller: { name: 'Contador de Histórias', description: 'Gere 10 histórias com IA', icon: '📚', requirement: { type: 'stories_generated', value: 10 } },
      influencer: { name: 'Influenciador', description: 'Compartilhe 5 conquistas', icon: '📱', requirement: { type: 'shares', value: 5 } }
    }
  }

  /**
   * Calcula o nível baseado no XP total
   */
  calculateLevel (totalXP) {
    return Math.floor(totalXP / this.xpPerLevel) + 1
  }

  /**
   * Calcula XP necessário para o próximo nível
   */
  getXPForNextLevel (totalXP) {
    const currentLevel = this.calculateLevel(totalXP)
    const xpForCurrentLevel = (currentLevel - 1) * this.xpPerLevel
    const xpForNextLevel = currentLevel * this.xpPerLevel

    return {
      currentLevel,
      currentXP: totalXP - xpForCurrentLevel,
      xpNeeded: xpForNextLevel - totalXP,
      xpForNextLevel: this.xpPerLevel,
      progress: ((totalXP - xpForCurrentLevel) / this.xpPerLevel) * 100
    }
  }

  /**
   * Processa a conclusão de uma tarefa e atualiza gamificação
   */
  async processTaskCompletion (user, task, questData = null) {
    const oldLevel = this.calculateLevel(user.gamification.totalXP)

    // Calcular XP ganho
    let xpGained = questData?.xp || this.calculateTaskXP(task)

    // Bonus por prioridade
    if (task.priority === 'high') {
      xpGained = Math.floor(xpGained * 1.5)
    }

    // Bonus por streak
    const streakBonus = this.calculateStreakBonus(user.gamification.currentStreak)
    xpGained += streakBonus

    // Atualizar estatísticas do usuário
    user.gamification.totalXP += xpGained
    user.gamification.tasksCompleted += 1
    user.gamification.lastTaskCompletedAt = new Date()

    // Atualizar streak
    this.updateStreak(user)

    // Verificar level up
    const newLevel = this.calculateLevel(user.gamification.totalXP)
    const leveledUp = newLevel > oldLevel

    if (leveledUp) {
      user.gamification.level = newLevel
    }

    // Verificar novos badges
    const newBadges = await this.checkForNewBadges(user)

    // Atualizar estatísticas por categoria
    this.updateCategoryStats(user, task, questData)

    return {
      xpGained,
      streakBonus,
      leveledUp,
      newLevel: leveledUp ? newLevel : null,
      newBadges,
      totalXP: user.gamification.totalXP,
      currentStreak: user.gamification.currentStreak,
      nextLevel: this.getXPForNextLevel(user.gamification.totalXP)
    }
  }

  calculateTaskXP (task) {
    let baseXP = 15

    // XP por prioridade
    switch (task.priority) {
      case 'high': baseXP = 30; break
      case 'medium': baseXP = 20; break
      case 'low': baseXP = 10; break
      default: baseXP = 15
    }

    // XP por tempo estimado
    if (task.estimatedTime) {
      const minutes = parseInt(task.estimatedTime.replace(/\D/g, '')) || 30
      if (minutes > 120) baseXP += 15
      else if (minutes > 60) baseXP += 10
      else if (minutes > 30) baseXP += 5
    }

    return baseXP
  }

  calculateStreakBonus (streak) {
    if (streak >= 30) return 10
    if (streak >= 14) return 7
    if (streak >= 7) return 5
    if (streak >= 3) return 2
    return 0
  }

  updateStreak (user) {
    const now = new Date()
    const lastCompleted = user.gamification.lastTaskCompletedAt

    if (!lastCompleted) {
      user.gamification.currentStreak = 1
      user.gamification.longestStreak = Math.max(user.gamification.longestStreak, 1)
      return
    }

    const daysDiff = Math.floor((now - lastCompleted) / (1000 * 60 * 60 * 24))

    if (daysDiff === 0) {
      // Mesmo dia, mantém streak

    } else if (daysDiff === 1) {
      // Dia consecutivo, aumenta streak
      user.gamification.currentStreak += 1
      user.gamification.longestStreak = Math.max(
        user.gamification.longestStreak,
        user.gamification.currentStreak
      )
    } else {
      // Quebrou o streak
      user.gamification.currentStreak = 1
    }
  }

  updateCategoryStats (user, task, questData) {
    const category = questData?.category || 'general'

    if (!user.gamification.categoryStats[category]) {
      user.gamification.categoryStats[category] = {
        tasksCompleted: 0,
        totalXP: 0,
        averageXP: 0
      }
    }

    const categoryStats = user.gamification.categoryStats[category]
    categoryStats.tasksCompleted += 1
    categoryStats.totalXP += questData?.xp || this.calculateTaskXP(task)
    categoryStats.averageXP = Math.round(categoryStats.totalXP / categoryStats.tasksCompleted)
  }

  async checkForNewBadges (user) {
    const newBadges = []
    const userBadges = user.gamification.badges || []

    for (const [badgeId, badge] of Object.entries(this.badges)) {
      // Pular se já possui o badge
      if (userBadges.includes(badgeId)) continue

      // Verificar se atende aos requisitos
      if (this.checkBadgeRequirement(user, badge.requirement)) {
        newBadges.push({
          id: badgeId,
          ...badge,
          earnedAt: new Date()
        })
        userBadges.push(badgeId)
      }
    }

    user.gamification.badges = userBadges
    return newBadges
  }

  checkBadgeRequirement (user, requirement) {
    const stats = user.gamification

    switch (requirement.type) {
      case 'level':
        return stats.level >= requirement.value

      case 'tasks_completed':
        return stats.tasksCompleted >= requirement.value

      case 'streak':
        return stats.longestStreak >= requirement.value

      case 'high_priority':
        return (stats.categoryStats.combat?.tasksCompleted || 0) >= requirement.value

      case 'stories_generated':
        return (stats.storiesGenerated || 0) >= requirement.value

      case 'shares':
        return (stats.sharesCount || 0) >= requirement.value

      case 'speed':
        // Implementar lógica de velocidade baseada em timestamps
        return false

      case 'time':
        // Implementar lógica de horário baseada em timestamps
        return false

      default:
        return false
    }
  }

  /**
   * Gera leaderboard dos top usuários
   */
  generateLeaderboardQuery () {
    return [
      {
        $match: {
          'gamification.totalXP': { $gt: 0 }
        }
      },
      {
        $project: {
          username: 1,
          'gamification.totalXP': 1,
          'gamification.level': 1,
          'gamification.tasksCompleted': 1,
          'gamification.currentStreak': 1,
          'gamification.badges': 1,
          createdAt: 1
        }
      },
      {
        $sort: {
          'gamification.totalXP': -1,
          'gamification.level': -1,
          'gamification.tasksCompleted': -1
        }
      },
      {
        $limit: 10
      }
    ]
  }

  /**
   * Calcula estatísticas do usuário para dashboard
   */
  getUserStats (user) {
    const stats = user.gamification
    const nextLevel = this.getXPForNextLevel(stats.totalXP)

    return {
      level: stats.level,
      totalXP: stats.totalXP,
      tasksCompleted: stats.tasksCompleted,
      currentStreak: stats.currentStreak,
      longestStreak: stats.longestStreak,
      badges: stats.badges?.map(badgeId => ({
        id: badgeId,
        ...this.badges[badgeId]
      })) || [],
      nextLevel,
      categoryStats: stats.categoryStats,
      rank: null, // Será calculado no controller
      achievements: this.getRecentAchievements(user)
    }
  }

  getRecentAchievements (user) {
    // Implementar lógica para buscar conquistas recentes
    return []
  }

  /**
   * Gera dados para compartilhamento social
   */
  generateShareData (user, achievement) {
    const shareData = {
      type: achievement.type, // 'level_up', 'badge_earned', 'streak_milestone'
      user: {
        username: user.username,
        level: user.gamification.level,
        totalXP: user.gamification.totalXP
      },
      achievement,
      timestamp: new Date().toISOString(),
      hashtags: ['#GamifiedTasks', '#ProductivityRPG', '#TaskManagement', '#Gamification']
    }

    return shareData
  }
}

module.exports = new GamificationService()
