const express = require('express')
const router = express.Router()

const {
  getLeaderboard,
  getUserDashboard,
  getAvailableBadges,
  updateGamificationPreferences,
  shareAchievement,
  getGlobalStats,
  processShareWebhook
} = require('../controllers/gamificationController')

const { authenticate } = require('../middleware/auth')

/**
 * @swagger
 * tags:
 *   name: Gamification
 *   description: Sistema de gamificação com XP, levels, badges e leaderboard
 */

/**
 * @swagger
 * /api/leaderboard:
 *   get:
 *     summary: Obter leaderboard público
 *     tags: [Gamification]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *           default: 10
 *         description: Número de usuários no ranking
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [all, weekly, monthly]
 *           default: all
 *         description: Período do ranking
 *     responses:
 *       200:
 *         description: Leaderboard dos top usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     leaderboard:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           rank:
 *                             type: number
 *                             example: 1
 *                           username:
 *                             type: string
 *                             example: "GamerPro123"
 *                           level:
 *                             type: number
 *                             example: 15
 *                           totalXP:
 *                             type: number
 *                             example: 1450
 *                           tasksCompleted:
 *                             type: number
 *                             example: 87
 *                           currentStreak:
 *                             type: number
 *                             example: 12
 *                           badges:
 *                             type: number
 *                             example: 8
 *                     period:
 *                       type: string
 *                       example: "all"
 *                     total:
 *                       type: number
 *                       example: 10
 *     operationId: getLeaderboard
 */
router.get('/leaderboard', getLeaderboard)

/**
 * @swagger
 * /api/gamification/dashboard:
 *   get:
 *     summary: Dashboard de gamificação do usuário
 *     tags: [Gamification]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard completo do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         username:
 *                           type: string
 *                         level:
 *                           type: number
 *                         totalXP:
 *                           type: number
 *                         rank:
 *                           type: number
 *                     stats:
 *                       type: object
 *                       properties:
 *                         level:
 *                           type: number
 *                         totalXP:
 *                           type: number
 *                         tasksCompleted:
 *                           type: number
 *                         currentStreak:
 *                           type: number
 *                         longestStreak:
 *                           type: number
 *                         badges:
 *                           type: array
 *                         nextLevel:
 *                           type: object
 *                     stories:
 *                       type: object
 *                     recentAchievements:
 *                       type: array
 *                     activeStories:
 *                       type: array
 *     operationId: getGamificationDashboard
 */
router.get('/gamification/dashboard', authenticate, getUserDashboard)

/**
 * @swagger
 * /api/gamification/badges:
 *   get:
 *     summary: Listar badges disponíveis e conquistados
 *     tags: [Gamification]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de badges
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     earned:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           description:
 *                             type: string
 *                           icon:
 *                             type: string
 *                           earned:
 *                             type: boolean
 *                     available:
 *                       type: array
 *                       items:
 *                         type: object
 *                     total:
 *                       type: number
 *                     earnedCount:
 *                       type: number
 *     operationId: getBadges
 */
router.get('/gamification/badges', authenticate, getAvailableBadges)

/**
 * @swagger
 * /api/gamification/preferences:
 *   put:
 *     summary: Atualizar preferências de gamificação
 *     tags: [Gamification]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class:
 *                 type: string
 *                 enum: [Aventureiro, Guerreiro, Mago, Ladino, Paladino, Explorador]
 *                 example: "Guerreiro"
 *               theme:
 *                 type: string
 *                 enum: [medieval, scifi, modern, fantasy]
 *                 example: "medieval"
 *               autoShare:
 *                 type: boolean
 *                 example: false
 *               shareOnLevelUp:
 *                 type: boolean
 *                 example: true
 *               shareOnBadge:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Preferências atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     preferences:
 *                       type: object
 *     operationId: updateGamificationPreferences
 */
router.put('/gamification/preferences', authenticate, updateGamificationPreferences)

/**
 * @swagger
 * /api/gamification/share:
 *   post:
 *     summary: Compartilhar conquista manualmente
 *     tags: [Gamification]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [level_up, badge_earned, streak_milestone, custom]
 *                 example: "level_up"
 *               data:
 *                 type: object
 *                 properties:
 *                   level:
 *                     type: number
 *                   badge:
 *                     type: object
 *                   streak:
 *                     type: number
 *                   message:
 *                     type: string
 *     responses:
 *       200:
 *         description: Conquista compartilhada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *     operationId: shareMilestone
 */
router.post('/gamification/share', authenticate, shareAchievement)

/**
 * @swagger
 * /api/gamification/global-stats:
 *   get:
 *     summary: Estatísticas globais da plataforma
 *     tags: [Gamification]
 *     responses:
 *       200:
 *         description: Estatísticas globais
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     users:
 *                       type: object
 *                       properties:
 *                         total:
 *                           type: number
 *                         averageLevel:
 *                           type: number
 *                     gamification:
 *                       type: object
 *                       properties:
 *                         totalXP:
 *                           type: number
 *                         totalTasksCompleted:
 *                           type: number
 *                         totalBadgesEarned:
 *                           type: number
 *                         longestStreak:
 *                           type: number
 *                     stories:
 *                       type: object
 *                       properties:
 *                         totalStories:
 *                           type: number
 *                         totalQuests:
 *                           type: number
 *                         completedStories:
 *                           type: number
 *                         completionRate:
 *                           type: number
 *     operationId: getGlobalStats
 */
router.get('/gamification/global-stats', getGlobalStats)

/**
 * @swagger
 * /api/webhooks/share:
 *   post:
 *     summary: Webhook para processar compartilhamentos
 *     tags: [Webhooks]
 *     operationId: processShareWebhook
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_type:
 *                 type: string
 *               user_id:
 *                 type: string
 *               data:
 *                 type: object
 *     responses:
 *       200:
 *         description: Webhook processado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 timestamp:
 *                   type: string
 */
router.post('/webhooks/share', processShareWebhook)

module.exports = router
