const Task = require('../models/Task')
const User = require('../models/User')
const Story = require('../models/Story')
const aiService = require('../services/aiService')
const gamificationService = require('../services/gamificationService')
const webhookService = require('../services/webhookService')

// @desc    Criar nova tarefa
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate, tags } = req.body

  const task = await Task.create({
    title,
    description,
    status,
    priority,
    dueDate,
    tags,
    userId: req.user.id
  })

  res.status(201).json({
    success: true,
    message: 'Tarefa criada com sucesso',
    data: { task }
  })
}

// @desc    Listar tarefas do usuário
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  const {
    status,
    priority,
    page,
    limit,
    sortBy,
    sortOrder,
    search
  } = req.query

  // Construir filtros
  const filters = { userId: req.user.id }

  if (status) filters.status = status
  if (priority) filters.priority = priority

  // Busca por texto no título e descrição
  if (search) {
    filters.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ]
  }

  // Configurar paginação
  const skip = (page - 1) * limit

  // Configurar ordenação
  const sortOptions = {}
  sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1

  // Executar consulta
  const tasks = await Task.find(filters)
    .sort(sortOptions)
    .skip(skip)
    .limit(limit)
    .populate('userId', 'name email')

  // Contar total de documentos para paginação
  const total = await Task.countDocuments(filters)

  res.json({
    success: true,
    data: {
      tasks,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
        limit
      }
    }
  })
}

// @desc    Obter tarefa específica
// @route   GET /api/tasks/:id
// @access  Private
const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('userId', 'name email')

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Tarefa não encontrada'
    })
  }

  // Verificar se o usuário pode acessar esta tarefa
  if (task.userId._id.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado'
    })
  }

  res.json({
    success: true,
    data: { task }
  })
}

// @desc    Atualizar tarefa
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Tarefa não encontrada'
    })
  }

  // Verificar se o usuário pode atualizar esta tarefa
  if (task.userId.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado'
    })
  }

  // Atualizar campos fornecidos
  const allowedUpdates = ['title', 'description', 'status', 'priority', 'dueDate', 'tags']
  const updates = {}

  allowedUpdates.forEach(field => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field]
    }
  })

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    updates,
    { new: true, runValidators: true }
  ).populate('userId', 'name email')

  res.json({
    success: true,
    message: 'Tarefa atualizada com sucesso',
    data: { task: updatedTask }
  })
}

// @desc    Deletar tarefa
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Tarefa não encontrada'
    })
  }

  // Verificar se o usuário pode deletar esta tarefa
  if (task.userId.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado'
    })
  }

  await Task.findByIdAndDelete(req.params.id)

  res.json({
    success: true,
    message: 'Tarefa deletada com sucesso'
  })
}

// @desc    Obter estatísticas das tarefas do usuário
// @route   GET /api/tasks/stats
// @access  Private
const getTaskStats = async (req, res) => {
  const userId = req.user.id

  const stats = await Task.getUserStats(userId)

  // Buscar tarefas vencidas
  const overdueTasks = await Task.findOverdue(userId)

  // Estatísticas adicionais
  const completedThisMonth = await Task.countDocuments({
    userId,
    status: 'completed',
    completedAt: {
      $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    }
  })

  res.json({
    success: true,
    data: {
      stats: {
        ...stats,
        overdue: overdueTasks.length,
        completedThisMonth
      },
      overdueTasks: overdueTasks.slice(0, 5) // Primeiras 5 tarefas vencidas
    }
  })
}

// @desc    Marcar tarefa como concluída
// @route   PATCH /api/tasks/:id/complete
// @access  Private
const completeTask = async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Tarefa não encontrada'
    })
  }

  // Verificar se o usuário pode atualizar esta tarefa
  if (task.userId.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado'
    })
  }

  if (task.status === 'completed') {
    return res.status(400).json({
      success: false,
      message: 'Tarefa já está concluída'
    })
  }

  task.status = 'completed'
  await task.save()

  res.json({
    success: true,
    message: 'Tarefa marcada como concluída',
    data: { task }
  })
}

// @desc    Buscar tarefas por status
// @route   GET /api/tasks/status/:status
// @access  Private
const getTasksByStatus = async (req, res) => {
  const { status } = req.params
  const { page = 1, limit = 10 } = req.query

  const validStatuses = ['pending', 'in_progress', 'completed']
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Status inválido'
    })
  }

  const skip = (page - 1) * limit

  const tasks = await Task.find({
    userId: req.user.id,
    status
  })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit))

  const total = await Task.countDocuments({
    userId: req.user.id,
    status
  })

  res.json({
    success: true,
    data: {
      tasks,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total,
        limit: parseInt(limit)
      }
    }
  })
}

// @desc    Gerar história RPG com IA
// @route   POST /api/tasks/story
// @access  Private
const generateStory = async (req, res) => {
  try {
    const { taskIds } = req.body

    // Validar se taskIds foi fornecido
    if (!taskIds || !Array.isArray(taskIds) || taskIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Array de IDs de tarefas é obrigatório'
      })
    }

    // Buscar tarefas do usuário
    const tasks = await Task.find({
      _id: { $in: taskIds },
      userId: req.user.id
    })

    if (tasks.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Nenhuma tarefa encontrada'
      })
    }

    // Buscar dados do usuário para personalização
    const user = await User.findById(req.user.id)
    const userProfile = {
      level: user.gamification.level,
      class: user.gamification.preferences.class,
      theme: user.gamification.preferences.theme
    }

    // Gerar história com IA
    const storyData = await aiService.generateStoryAndQuests(tasks, userProfile)

    // Salvar história no banco
    const story = new Story({
      userId: req.user.id,
      title: `Aventura Épica - ${new Date().toLocaleDateString()}`,
      story: storyData.story,
      theme: storyData.theme,
      quests: storyData.quests.map((quest, index) => ({
        taskId: tasks[index]._id,
        questTitle: quest.questTitle,
        questDescription: quest.questDescription,
        difficulty: quest.difficulty,
        xp: quest.xp,
        category: quest.category
      })),
      totalXP: storyData.totalXP,
      estimatedPlayTime: storyData.estimatedPlayTime,
      aiProvider: process.env.AI_PROVIDER || 'openai',
      totalQuests: storyData.quests.length,
      metadata: {
        fallback: storyData.fallback || false,
        generationTime: Date.now()
      }
    })

    await story.save()

    // Atualizar tarefas com dados da quest
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]
      const quest = storyData.quests[i]

      task.gamification = {
        ...task.gamification,
        xpReward: quest.xp,
        questData: {
          questTitle: quest.questTitle,
          questDescription: quest.questDescription,
          difficulty: quest.difficulty,
          category: quest.category,
          storyId: story._id.toString()
        }
      }

      await task.save()
    }

    // Atualizar contador de histórias geradas do usuário
    user.gamification.storiesGenerated += 1
    await user.save()

    res.status(201).json({
      success: true,
      message: 'História épica gerada com sucesso!',
      data: {
        story: {
          id: story._id,
          title: story.title,
          story: story.story,
          theme: story.theme,
          totalXP: story.totalXP,
          estimatedPlayTime: story.estimatedPlayTime,
          progress: story.progress
        },
        quests: storyData.quests,
        aiProvider: story.aiProvider,
        fallback: storyData.fallback
      }
    })
  } catch (error) {
    // console.error('Erro ao gerar história:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao gerar história',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Completar tarefa gamificada e ganhar XP
// @route   POST /api/tasks/:id/complete-quest
// @access  Private
const completeQuest = async (req, res) => {
  try {
    const { completionTime } = req.body // Tempo gasto em minutos (opcional)

    // Buscar tarefa
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    })

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Tarefa não encontrada'
      })
    }

    if (task.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Quest já foi completada'
      })
    }

    // Buscar usuário
    const user = await User.findById(req.user.id)

    // Marcar tarefa como completa
    task.status = 'completed'
    task.completedAt = new Date()
    if (completionTime) {
      task.gamification.completionTime = completionTime
    }

    // Processar gamificação
    const gamificationResult = await gamificationService.processTaskCompletion(
      user,
      task,
      task.gamification.questData
    )

    // Salvar alterações
    await task.save()
    await user.save()

    // Atualizar história se existir
    if (task.gamification.questData?.storyId) {
      const story = await Story.findById(task.gamification.questData.storyId)
      if (story) {
        const quest = story.quests.find(q => q.taskId.toString() === task._id.toString())
        if (quest && !quest.completed) {
          await story.completeQuest(quest._id)
        }
      }
    }

    // Processar compartilhamento automático se habilitado
    if (gamificationResult.leveledUp && user.gamification.preferences.shareOnLevelUp) {
      await webhookService.processAchievementShare(user, {
        type: 'level_up',
        newLevel: gamificationResult.newLevel,
        xpGained: gamificationResult.xpGained
      })
    }

    if (gamificationResult.newBadges.length > 0 && user.gamification.preferences.shareOnBadge) {
      for (const badge of gamificationResult.newBadges) {
        await webhookService.processAchievementShare(user, {
          type: 'badge_earned',
          badge
        })
      }
    }

    res.json({
      success: true,
      message: `Quest completada! +${gamificationResult.xpGained} XP`,
      data: {
        task: {
          id: task._id,
          title: task.title,
          questTitle: task.gamification.questData?.questTitle,
          status: task.status,
          completedAt: task.completedAt,
          xpEarned: gamificationResult.xpGained
        },
        gamification: {
          xpGained: gamificationResult.xpGained,
          streakBonus: gamificationResult.streakBonus,
          leveledUp: gamificationResult.leveledUp,
          newLevel: gamificationResult.newLevel,
          newBadges: gamificationResult.newBadges,
          totalXP: gamificationResult.totalXP,
          currentStreak: gamificationResult.currentStreak,
          nextLevel: gamificationResult.nextLevel
        }
      }
    })
  } catch (error) {
    // console.error('Erro ao completar quest:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao completar quest',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Buscar histórias do usuário
// @route   GET /api/tasks/stories
// @access  Private
const getUserStories = async (req, res) => {
  try {
    const { active = 'true', limit = 10, page = 1 } = req.query

    const query = { userId: req.user.id }
    if (active === 'true') {
      query.isActive = true
    }

    const stories = await Story.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .populate('quests.taskId', 'title status')

    const total = await Story.countDocuments(query)

    res.json({
      success: true,
      data: {
        stories,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / parseInt(limit)),
          total
        }
      }
    })
  } catch (error) {
    // console.error('Erro ao buscar histórias:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar histórias',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// @desc    Buscar história específica
// @route   GET /api/tasks/stories/:id
// @access  Private
const getStory = async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
      userId: req.user.id
    }).populate('quests.taskId', 'title description status priority')

    if (!story) {
      return res.status(404).json({
        success: false,
        message: 'História não encontrada'
      })
    }

    res.json({
      success: true,
      data: { story }
    })
  } catch (error) {
    // console.error('Erro ao buscar história:', error)
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar história',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  getTaskStats,
  completeTask,
  getTasksByStatus,
  generateStory,
  completeQuest,
  getUserStories,
  getStory
}
