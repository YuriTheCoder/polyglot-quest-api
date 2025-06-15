const OpenAI = require('openai')
const { GoogleGenerativeAI } = require('@google/generative-ai')

class AIService {
  constructor () {
    this.provider = process.env.AI_PROVIDER || 'openai'
    this.maxStoryLength = parseInt(process.env.MAX_STORY_LENGTH) || 500
    this.defaultXP = parseInt(process.env.DEFAULT_XP_PER_TASK) || 10

    // Initialize OpenAI
    if (process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
      })
    }

    // Initialize Gemini
    if (process.env.GEMINI_API_KEY) {
      this.gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
      this.geminiModel = this.gemini.getGenerativeModel({ model: 'gemini-pro' })
    }
  }

  /**
   * Gera história RPG e quests baseadas nas tarefas do usuário
   * @param {Array} tasks - Array de tarefas com { title, description, priority, estimatedTime }
   * @param {Object} userProfile - Perfil do usuário com { level, xp, preferences }
   * @returns {Object} - { story, quests, totalXP }
   */
  async generateStoryAndQuests (tasks, userProfile = {}) {
    try {
      const prompt = this.buildStoryPrompt(tasks, userProfile)

      let response
      if (this.provider === 'openai' && this.openai) {
        response = await this.generateWithOpenAI(prompt)
      } else if (this.provider === 'gemini' && this.geminiModel) {
        response = await this.generateWithGemini(prompt)
      } else {
        throw new Error(`AI provider ${this.provider} not configured or invalid`)
      }

      return this.parseAndValidateResponse(response, tasks)
    } catch (error) {
      // console.error('AI Service Error:', error)
      // Fallback para resposta padrão se IA falhar
      return this.generateFallbackStory(tasks)
    }
  }

  buildStoryPrompt (tasks, userProfile) {
    const userLevel = userProfile.level || 1
    const userClass = userProfile.class || 'Aventureiro'
    const taskCount = tasks.length

    const tasksDescription = tasks.map((task, index) =>
      `${index + 1}. "${task.title}" (Prioridade: ${task.priority || 'média'}, Tempo estimado: ${task.estimatedTime || '30min'})`
    ).join('\n')

    return `
Você é um Mestre de RPG criativo. Crie uma história épica e envolvente para um ${userClass} de nível ${userLevel} que precisa completar ${taskCount} missões.

TAREFAS A TRANSFORMAR EM QUESTS:
${tasksDescription}

INSTRUÇÕES:
1. Crie uma narrativa coesa e motivadora (máximo ${this.maxStoryLength} caracteres)
2. Transforme cada tarefa em uma quest épica com descrição envolvente
3. Atribua XP baseado na dificuldade: tarefas simples (10-20 XP), médias (25-40 XP), complexas (45-60 XP)
4. Use temas de fantasia medieval, sci-fi ou aventura moderna
5. Mantenha tom motivacional e divertido

RESPONDA APENAS COM JSON VÁLIDO:
{
  "story": "História épica conectando todas as quests...",
  "theme": "medieval|scifi|modern",
  "quests": [
    {
      "taskId": 0,
      "questTitle": "Nome épico da quest",
      "questDescription": "Descrição motivadora da missão",
      "difficulty": "easy|medium|hard",
      "xp": 25,
      "category": "combat|exploration|crafting|social"
    }
  ],
  "totalXP": 150,
  "estimatedPlayTime": "2h 30min"
}
`
  }

  async generateWithOpenAI (prompt) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em gamificação e narrativa de RPG. Sempre responda com JSON válido.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1500,
      temperature: 0.8,
      response_format: { type: 'json_object' }
    })

    return completion.choices[0].message.content
  }

  async generateWithGemini (prompt) {
    const result = await this.geminiModel.generateContent(prompt)
    const response = await result.response
    return response.text()
  }

  parseAndValidateResponse (response, originalTasks) {
    try {
      const parsed = JSON.parse(response)

      // Validação básica da estrutura
      if (!parsed.story || !parsed.quests || !Array.isArray(parsed.quests)) {
        throw new Error('Invalid response structure')
      }

      // Garantir que temos uma quest para cada tarefa
      if (parsed.quests.length !== originalTasks.length) {
        throw new Error('Quest count mismatch')
      }

      // Validar e sanitizar cada quest
      const validatedQuests = parsed.quests.map((quest, index) => ({
        taskId: index,
        questTitle: quest.questTitle || `Missão ${index + 1}`,
        questDescription: quest.questDescription || `Complete a tarefa: ${originalTasks[index].title}`,
        difficulty: ['easy', 'medium', 'hard'].includes(quest.difficulty) ? quest.difficulty : 'medium',
        xp: Math.max(10, Math.min(100, quest.xp || this.defaultXP)),
        category: ['combat', 'exploration', 'crafting', 'social'].includes(quest.category) ? quest.category : 'exploration'
      }))

      const totalXP = validatedQuests.reduce((sum, quest) => sum + quest.xp, 0)

      return {
        story: parsed.story.substring(0, this.maxStoryLength),
        theme: parsed.theme || 'medieval',
        quests: validatedQuests,
        totalXP,
        estimatedPlayTime: parsed.estimatedPlayTime || this.calculateEstimatedTime(originalTasks),
        generatedAt: new Date().toISOString()
      }
    } catch (error) {
      // console.error('Error parsing AI response:', error)
      return this.generateFallbackStory(originalTasks)
    }
  }

  generateFallbackStory (tasks) {
    const themes = ['medieval', 'scifi', 'modern']
    const theme = themes[Math.floor(Math.random() * themes.length)]

    const storyTemplates = {
      medieval: 'Você é um corajoso aventureiro em terras místicas. Antigas profecias falam de grandes desafios que testarão sua determinação.',
      scifi: 'Como explorador espacial da Federação Galáctica, você recebeu missões críticas para salvar a humanidade.',
      modern: 'Você é um agente especial em uma missão secreta. Cada tarefa completada te aproxima do objetivo final.'
    }

    const quests = tasks.map((task, index) => ({
      taskId: index,
      questTitle: `Missão ${index + 1}: ${task.title}`,
      questDescription: `Complete esta importante missão: ${task.description || task.title}`,
      difficulty: task.priority === 'high' ? 'hard' : task.priority === 'low' ? 'easy' : 'medium',
      xp: task.priority === 'high' ? 40 : task.priority === 'low' ? 15 : 25,
      category: 'exploration'
    }))

    return {
      story: storyTemplates[theme],
      theme,
      quests,
      totalXP: quests.reduce((sum, quest) => sum + quest.xp, 0),
      estimatedPlayTime: this.calculateEstimatedTime(tasks),
      generatedAt: new Date().toISOString(),
      fallback: true
    }
  }

  calculateEstimatedTime (tasks) {
    const totalMinutes = tasks.reduce((sum, task) => {
      const time = task.estimatedTime || '30min'
      const minutes = parseInt(time.replace(/\D/g, '')) || 30
      return sum + minutes
    }, 0)

    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`
  }

  /**
   * Gera mensagem motivacional para compartilhamento
   */
  async generateShareMessage (achievement) {
    const templates = [
      `🎮 Level Up! Acabei de alcançar o nível ${achievement.level}! #GamifiedTasks #ProductivityRPG`,
      `⚔️ Nova conquista desbloqueada: ${achievement.badge}! Quem mais está gamificando suas tarefas? #TaskRPG`,
      `🏆 ${achievement.xp} XP conquistados hoje! A produtividade nunca foi tão divertida! #GamificationWorks`,
      '🎯 Missão cumprida! Mais um dia épico de produtividade gamificada! #LevelUp #Tasks'
    ]

    return templates[Math.floor(Math.random() * templates.length)]
  }
}

module.exports = new AIService()
