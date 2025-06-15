const User = require('../models/User')
const Task = require('../models/Task')

// @desc    Listar todos os usuários (Admin only)
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  const { page = 1, limit = 10, search, role, isActive } = req.query

  // Construir filtros
  const filters = {}

  if (search) {
    filters.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } }
    ]
  }

  if (role) filters.role = role
  if (isActive !== undefined) filters.isActive = isActive === 'true'

  // Configurar paginação
  const skip = (page - 1) * limit

  // Executar consulta
  const users = await User.find(filters)
    .select('-password')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit))

  // Contar total de documentos
  const total = await User.countDocuments(filters)

  res.json({
    success: true,
    data: {
      users,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total,
        limit: parseInt(limit)
      }
    }
  })
}

// @desc    Obter usuário específico (Admin only)
// @route   GET /api/users/:id
// @access  Private/Admin
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Buscar estatísticas das tarefas do usuário
  const taskStats = await Task.getUserStats(user._id)

  res.json({
    success: true,
    data: {
      user,
      taskStats
    }
  })
}

// @desc    Atualizar usuário (Admin only)
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  const { name, email, role, isActive } = req.body

  const user = await User.findById(req.params.id)

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Verificar se email já está em uso por outro usuário
  if (email && email !== user.email) {
    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Este email já está em uso'
      })
    }
  }

  // Atualizar campos fornecidos
  if (name) user.name = name
  if (email) user.email = email
  if (role) user.role = role
  if (isActive !== undefined) user.isActive = isActive

  await user.save()

  res.json({
    success: true,
    message: 'Usuário atualizado com sucesso',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        updatedAt: user.updatedAt
      }
    }
  })
}

// @desc    Deletar usuário (Admin only)
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Não permitir que admin delete a si mesmo
  if (user._id.toString() === req.user.id) {
    return res.status(400).json({
      success: false,
      message: 'Você não pode deletar sua própria conta'
    })
  }

  // Deletar todas as tarefas do usuário
  await Task.deleteMany({ userId: user._id })

  // Deletar usuário
  await User.findByIdAndDelete(req.params.id)

  res.json({
    success: true,
    message: 'Usuário e suas tarefas foram deletados com sucesso'
  })
}

// @desc    Ativar/Desativar usuário (Admin only)
// @route   PATCH /api/users/:id/toggle-status
// @access  Private/Admin
const toggleUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    })
  }

  // Não permitir que admin desative a si mesmo
  if (user._id.toString() === req.user.id) {
    return res.status(400).json({
      success: false,
      message: 'Você não pode desativar sua própria conta'
    })
  }

  user.isActive = !user.isActive
  await user.save()

  res.json({
    success: true,
    message: `Usuário ${user.isActive ? 'ativado' : 'desativado'} com sucesso`,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isActive: user.isActive
      }
    }
  })
}

// @desc    Obter estatísticas gerais (Admin only)
// @route   GET /api/users/stats
// @access  Private/Admin
const getSystemStats = async (req, res) => {
  // Estatísticas de usuários
  const totalUsers = await User.countDocuments()
  const activeUsers = await User.countDocuments({ isActive: true })
  const adminUsers = await User.countDocuments({ role: 'admin' })

  // Estatísticas de tarefas
  const totalTasks = await Task.countDocuments()
  const completedTasks = await Task.countDocuments({ status: 'completed' })
  const pendingTasks = await Task.countDocuments({ status: 'pending' })
  const inProgressTasks = await Task.countDocuments({ status: 'in_progress' })

  // Tarefas vencidas
  const overdueTasks = await Task.countDocuments({
    dueDate: { $lt: new Date() },
    status: { $ne: 'completed' }
  })

  // Usuários mais ativos (com mais tarefas)
  const mostActiveUsers = await Task.aggregate([
    {
      $group: {
        _id: '$userId',
        taskCount: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        _id: 0,
        userId: '$_id',
        name: '$user.name',
        email: '$user.email',
        taskCount: 1
      }
    },
    {
      $sort: { taskCount: -1 }
    },
    {
      $limit: 5
    }
  ])

  res.json({
    success: true,
    data: {
      users: {
        total: totalUsers,
        active: activeUsers,
        inactive: totalUsers - activeUsers,
        admins: adminUsers
      },
      tasks: {
        total: totalTasks,
        completed: completedTasks,
        pending: pendingTasks,
        inProgress: inProgressTasks,
        overdue: overdueTasks
      },
      mostActiveUsers
    }
  })
}

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
  getSystemStats
}
