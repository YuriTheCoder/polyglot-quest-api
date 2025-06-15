const axios = require('axios')
const aiService = require('./aiService')

class WebhookService {
  constructor () {
    this.discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    this.zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    this.twitterBearerToken = process.env.TWITTER_BEARER_TOKEN
  }

  /**
   * Processa compartilhamento de conquista
   */
  async processAchievementShare (user, achievement) {
    try {
      const shareData = {
        user: {
          username: user.username,
          level: user.gamification.level,
          totalXP: user.gamification.totalXP,
          badges: user.gamification.badges?.length || 0
        },
        achievement,
        timestamp: new Date().toISOString()
      }

      // Gerar mensagem motivacional
      const shareMessage = await aiService.generateShareMessage(achievement)
      shareData.message = shareMessage

      // Enviar para diferentes plataformas
      const promises = []

      if (this.discordWebhookUrl) {
        promises.push(this.sendToDiscord(shareData))
      }

      if (this.zapierWebhookUrl) {
        promises.push(this.sendToZapier(shareData))
      }

      // Executar todos os webhooks em paralelo
      const results = await Promise.allSettled(promises)

      // Log dos resultados
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          // console.error(`Webhook ${index} failed:`, result.reason)
        }
      })

      return {
        success: true,
        shareData,
        results: results.map(r => r.status)
      }
    } catch (error) {
      // console.error('Error processing achievement share:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  /**
   * Envia notificação para Discord
   */
  async sendToDiscord (shareData) {
    if (!this.discordWebhookUrl) return

    const embed = this.createDiscordEmbed(shareData)

    const payload = {
      content: shareData.message,
      embeds: [embed],
      username: 'Gamified Tasks Bot',
      avatar_url: 'https://cdn.discordapp.com/attachments/123456789/gamified-tasks-avatar.png'
    }

    return axios.post(this.discordWebhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000
    })
  }

  createDiscordEmbed (shareData) {
    const { user, achievement } = shareData

    let color = 0x00ff00 // Verde padrão
    let title = '🎮 Nova Conquista!'

    switch (achievement.type) {
      case 'level_up':
        color = 0xffd700 // Dourado
        title = `🆙 Level Up! Nível ${achievement.newLevel}`
        break
      case 'badge_earned':
        color = 0xff6b6b // Vermelho
        title = `🏆 Novo Badge: ${achievement.badge.name}`
        break
      case 'streak_milestone':
        color = 0x4ecdc4 // Azul
        title = `🔥 Streak de ${achievement.streak} dias!`
        break
    }

    return {
      title,
      description: shareData.message,
      color,
      fields: [
        {
          name: '👤 Usuário',
          value: user.username,
          inline: true
        },
        {
          name: '⭐ Nível',
          value: user.level.toString(),
          inline: true
        },
        {
          name: '💎 XP Total',
          value: user.totalXP.toString(),
          inline: true
        },
        {
          name: '🏅 Badges',
          value: user.badges.toString(),
          inline: true
        }
      ],
      timestamp: shareData.timestamp,
      footer: {
        text: 'Gamified Tasks API',
        icon_url: 'https://cdn.discordapp.com/attachments/123456789/gamified-tasks-icon.png'
      }
    }
  }

  /**
   * Envia para Zapier (conecta com outras plataformas)
   */
  async sendToZapier (shareData) {
    if (!this.zapierWebhookUrl) return

    const payload = {
      event_type: 'achievement_unlocked',
      user_id: shareData.user.username,
      achievement_type: shareData.achievement.type,
      message: shareData.message,
      user_stats: shareData.user,
      timestamp: shareData.timestamp,
      hashtags: ['GamifiedTasks', 'ProductivityRPG', 'TaskManagement', 'Gamification']
    }

    return axios.post(this.zapierWebhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000
    })
  }

  /**
   * Cria post para Twitter (via Zapier ou API direta)
   */
  async createTwitterPost (shareData) {
    // Implementação futura para API do Twitter
    // Por enquanto, será enviado via Zapier
    return this.sendToZapier({
      ...shareData,
      platform: 'twitter'
    })
  }

  /**
   * Processa webhook de leaderboard semanal
   */
  async processWeeklyLeaderboard (topUsers) {
    try {
      const leaderboardData = {
        type: 'weekly_leaderboard',
        period: 'weekly',
        top_users: topUsers.slice(0, 5).map((user, index) => ({
          rank: index + 1,
          username: user.username,
          level: user.gamification.level,
          totalXP: user.gamification.totalXP,
          tasksCompleted: user.gamification.tasksCompleted
        })),
        timestamp: new Date().toISOString()
      }

      const message = this.generateLeaderboardMessage(leaderboardData)

      if (this.discordWebhookUrl) {
        await this.sendLeaderboardToDiscord(leaderboardData, message)
      }

      return { success: true, leaderboardData }
    } catch (error) {
      // console.error('Error processing weekly leaderboard:', error)
      return { success: false, error: error.message }
    }
  }

  generateLeaderboardMessage (data) {
    const topUser = data.top_users[0]
    return '🏆 **LEADERBOARD SEMANAL** 🏆\n\n' +
           `👑 **${topUser.username}** lidera com ${topUser.totalXP} XP!\n\n` +
           'Quem será o próximo a dominar o ranking? 🎮\n\n' +
           '#GamifiedTasks #Leaderboard #ProductivityChampion'
  }

  async sendLeaderboardToDiscord (data, message) {
    const embed = {
      title: '🏆 Leaderboard Semanal',
      description: 'Os maiores campeões da produtividade desta semana!',
      color: 0xffd700,
      fields: data.top_users.map(user => ({
        name: `${this.getRankEmoji(user.rank)} #${user.rank} - ${user.username}`,
        value: `Nível ${user.level} • ${user.totalXP} XP • ${user.tasksCompleted} tarefas`,
        inline: false
      })),
      timestamp: data.timestamp,
      footer: {
        text: 'Gamified Tasks - Weekly Champions',
        icon_url: 'https://cdn.discordapp.com/attachments/123456789/trophy-icon.png'
      }
    }

    const payload = {
      content: message,
      embeds: [embed],
      username: 'Leaderboard Bot',
      avatar_url: 'https://cdn.discordapp.com/attachments/123456789/leaderboard-avatar.png'
    }

    return axios.post(this.discordWebhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000
    })
  }

  getRankEmoji (rank) {
    switch (rank) {
      case 1: return '🥇'
      case 2: return '🥈'
      case 3: return '🥉'
      case 4: return '4️⃣'
      case 5: return '5️⃣'
      default: return '🏅'
    }
  }

  /**
   * Webhook genérico para eventos customizados
   */
  async sendCustomWebhook (eventType, data) {
    try {
      const payload = {
        event_type: eventType,
        data,
        timestamp: new Date().toISOString(),
        source: 'gamified-tasks-api'
      }

      const promises = []

      if (this.zapierWebhookUrl) {
        promises.push(
          axios.post(this.zapierWebhookUrl, payload, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 5000
          })
        )
      }

      await Promise.allSettled(promises)
      return { success: true }
    } catch (error) {
      // console.error('Error sending custom webhook:', error)
      return { success: false, error: error.message }
    }
  }

  /**
   * Valida configuração de webhooks
   */
  validateConfiguration () {
    const config = {
      discord: !!this.discordWebhookUrl,
      zapier: !!this.zapierWebhookUrl,
      twitter: !!this.twitterBearerToken
    }

    const enabledServices = Object.entries(config)
      .filter(([, enabled]) => enabled)
      .map(([service]) => service)

    return {
      configured: enabledServices.length > 0,
      services: config,
      enabledServices
    }
  }
}

module.exports = new WebhookService()
