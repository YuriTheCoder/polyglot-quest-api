// Script de inicialização do MongoDB
// Este script é executado quando o container MongoDB é criado pela primeira vez

// Conectar ao banco de dados
db = db.getSiblingDB('task-management');

// Criar usuário admin (opcional)
// db.createUser({
//   user: 'admin',
//   pwd: 'admin123',
//   roles: [
//     {
//       role: 'readWrite',
//       db: 'task-management'
//     }
//   ]
// });

// Criar índices para melhor performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.users.createIndex({ isActive: 1 });

db.tasks.createIndex({ userId: 1 });
db.tasks.createIndex({ status: 1 });
db.tasks.createIndex({ priority: 1 });
db.tasks.createIndex({ dueDate: 1 });
db.tasks.createIndex({ createdAt: -1 });
db.tasks.createIndex({ userId: 1, status: 1 });
db.tasks.createIndex({ userId: 1, priority: 1 });

// Criar usuário admin padrão (opcional para desenvolvimento)
const bcrypt = require('bcryptjs');

// Nota: Em produção, remova este usuário padrão ou altere a senha
db.users.insertOne({
  name: 'Administrator',
  email: 'admin@taskmanagement.com',
  password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LFvRG', // senha: admin123
  role: 'admin',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
});

print('✅ MongoDB inicializado com sucesso!');
print('📊 Índices criados para otimização de performance');
print('👤 Usuário admin criado: admin@taskmanagement.com / admin123');
print('⚠️  IMPORTANTE: Altere a senha do admin em produção!'); 