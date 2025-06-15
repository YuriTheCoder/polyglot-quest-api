const User = require('../models/User')
const Story = require('../models/Story')
const gamificationService = require('../services/gamificationService')
const webhookService = require('../services/webhookService')

// @desc    Obter leaderboard público
// @route   GET /api/leaderboard
// @access  Public
const getLeaderboard = async (req, res) => {
  try {
    const { limit = 10, period = 'all' } = req.query

    // Query base para leaderboard
    const leaderboardQuery = gamificationService.generateLeaderboardQuery()

    // Modificar query baseado no período
    if (period === 'weekly') {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)

      leaderboardQuery[0].$match['gamification.lastTaskCompletedAt'] = {
        $gte: weekAgo
      }
    } else if (period === 'monthly') {
      const monthAgo = new Date()
      monthAgo.setMonth(monthAgo.getMonth() - 1)

      leaderboardQuery[0].$match['gamification.lastTaskCompletedAt'] = {
        $gte: monthAgo
      }
    }

    // Ajustar limite
    leaderboardQuery[3].$limit = parseInt(limit)

    const leaderboard = await User.aggregate(leaderboardQuery)

    // Adicionar posição no ranking
    const leaderboardWithRank = leaderboard.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      level: user.gamification.level,
      totalXP: user.gamification.totalXP,
      tasksCompleted: user.gamification.tasksCompleted,
      currentStreak: user.gamification.currentStreak,
      badges: user.gamification.badges?.length || 0,
      joinedAt: user.createdAt
    }))

    res.json({
      success: true,
      data: {
        leaderboard: leaderboardWithRank,
        period,
        total: leaderboardWithRank.length,
        updatedAt: new Date().toISOString()
      }
    })
  } catch (error) {
    // console.error('Erro ao buscar leaderboard:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar leaderboard',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Obter dashboard de gamificação do usuário
// @route   GET /api/gamification/dashboard
// @access  Private
const getUserDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuário não encontrado'
      })
    }

    // Estatísticas básicas de gamificação
    const userStats = gamificationService.getUserStats(user)

    // Buscar posição no ranking
    const userRank = await User.countDocuments({
      'gamification.totalXP': { $gt: user.gamification.totalXP }
    }) + 1

    userStats.rank = userRank

    // Estatísticas de histórias
    const storyStats = await Story.getUserStoryStats(req.user.id)

    // Histórias ativas
    const activeStories = await Story.findActiveByUser(req.user.id)

    // Conquistas recentes
    const recentAchievements = user.gamification.recentAchievements
      ?.sort((a, b) => new Date(b.achievedAt) - new Date(a.achievedAt))
      ?.slice(0, 5) || []

    res.json({
      success: true,
      data: {
        user: {
          username: user.name,
          level: userStats.level,
          totalXP: userStats.totalXP,
          rank: userStats.rank
        },
        stats: userStats,
        stories: {
          ...storyStats,
          active: activeStories.length
        },
        recentAchievements,
        activeStories: activeStories.slice(0, 3) // Últimas 3 histórias ativas
      }
    })
  } catch (error) {
    // console.error('Erro ao buscar dashboard:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar dashboard',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Obter badges disponíveis
// @route   GET /api/gamification/badges
// @access  Private
const getAvailableBadges = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const userBadges = user.gamification.badges || []

    const allBadges = Object.entries(gamificationService.badges).map(([id, badge]) => ({
      id,
      ...badge,
      earned: userBadges.includes(id),
      progress: gamificationService.checkBadgeRequirement(user, badge.requirement) ? 100 : 0
    }))

    // Separar badges conquistados e não conquistados
    const earnedBadges = allBadges.filter(badge => badge.earned)
    const availableBadges = allBadges.filter(badge => !badge.earned)

    res.json({
      success: true,
      data: {
        earned: earnedBadges,
        available: availableBadges,
        total: allBadges.length,
        earnedCount: earnedBadges.length
      }
    })
  } catch (error) {
    // console.error('Erro ao buscar badges:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar badges',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Atualizar preferências de gamificação
// @route   PUT /api/gamification/preferences
// @access  Private
const updateGamificationPreferences = async (req, res) => {
  try {
    const { class: userClass, theme, autoShare, shareOnLevelUp, shareOnBadge } = req.body

    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuário não encontrado'
      })
    }

    // Atualizar preferências
    if (userClass) user.gamification.preferences.class = userClass
    if (theme) user.gamification.preferences.theme = theme
    if (autoShare !== undefined) user.gamification.preferences.autoShare = autoShare
    if (shareOnLevelUp !== undefined) user.gamification.preferences.shareOnLevelUp = shareOnLevelUp
    if (shareOnBadge !== undefined) user.gamification.preferences.shareOnBadge = shareOnBadge

    await user.save()

    res.json({
      success: true,
      message: 'Preferências atualizadas com sucesso',
      data: {
        preferences: user.gamification.preferences
      }
    })
  } catch (error) {
    // console.error('Erro ao atualizar preferências:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao atualizar preferências',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Compartilhar conquista manualmente
// @route   POST /api/gamification/share
// @access  Private
const shareAchievement = async (req, res) => {
  try {
    const { type, data } = req.body

    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuário não encontrado'
      })
    }

    // Validar tipo de conquista
    const validTypes = ['level_up', 'badge_earned', 'streak_milestone', 'custom']
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: 'Tipo de conquista inválido'
      })
    }

    // Processar compartilhamento
    const shareResult = await webhookService.processAchievementShare(user, {
      type,
      ...data
    })

    // Atualizar contador de compartilhamentos
    user.gamification.sharesCount += 1
    await user.save()

    res.json({
      success: true,
      message: 'Conquista compartilhada com sucesso!',
      data: {
        shareResult,
        totalShares: user.gamification.sharesCount
      }
    })
  } catch (error) {
    // console.error('Erro ao compartilhar conquista:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao compartilhar conquista',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Obter estatísticas globais da plataforma
// @route   GET /api/gamification/global-stats
// @access  Public
const getGlobalStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          totalXP: { $sum: '$gamification.totalXP' },
          totalTasksCompleted: { $sum: '$gamification.tasksCompleted' },
          averageLevel: { $avg: '$gamification.level' },
          totalBadgesEarned: { $sum: { $size: { $ifNull: ['$gamification.badges', []] } } },
          longestStreak: { $max: '$gamification.longestStreak' }
        }
      }
    ])

    const storyStats = await Story.aggregate([
      {
        $group: {
          _id: null,
          totalStories: { $sum: 1 },
          totalQuests: { $sum: '$totalQuests' },
          completedStories: {
            $sum: {
              $cond: [{ $eq: ['$completedQuests', '$totalQuests'] }, 1, 0]
            }
          }
        }
      }
    ])

    const globalStats = stats[0] || {}
    const globalStoryStats = storyStats[0] || {}

    res.json({
      success: true,
      data: {
        users: {
          total: globalStats.totalUsers || 0,
          averageLevel: Math.round(globalStats.averageLevel || 1)
        },
        gamification: {
          totalXP: globalStats.totalXP || 0,
          totalTasksCompleted: globalStats.totalTasksCompleted || 0,
          totalBadgesEarned: globalStats.totalBadgesEarned || 0,
          longestStreak: globalStats.longestStreak || 0
        },
        stories: {
          totalStories: globalStoryStats.totalStories || 0,
          totalQuests: globalStoryStats.totalQuests || 0,
          completedStories: globalStoryStats.completedStories || 0,
          completionRate: globalStoryStats.totalStories > 0
            ? Math.round((globalStoryStats.completedStories / globalStoryStats.totalStories) * 100)
            : 0
        },
        updatedAt: new Date().toISOString()
      }
    })
  } catch (error) {
    // console.error('Erro ao buscar estatísticas globais:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar estatísticas globais',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Webhook para processar compartilhamentos
// @route   POST /api/webhooks/share
// @access  Public (com validação de token se necessário)
const processShareWebhook = async (req, res) => {
  try {
    // const { eventType, userId, data } = req.body

    // Log do webhook recebido
    // console.log('Webhook recebido:', { eventType, userId, data })

    // Aqui você pode processar diferentes tipos de eventos
    // Por exemplo, atualizar estatísticas, enviar notificações, etc.

    res.json({
      success: true,
      message: 'Webhook processado com sucesso',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    // console.error('Erro ao processar webhook:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao processar webhook',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

module.exports = {
  getLeaderboard,
  getUserDashboard,
  getAvailableBadges,
  updateGamificationPreferences,
  shareAchievement,
  getGlobalStats,
  processShareWebhook
}
