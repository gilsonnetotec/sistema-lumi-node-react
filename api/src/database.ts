import { Sequelize } from 'sequelize';

const db = new Sequelize('lumi', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, 
  define: {
    timestamps: false
  }
});

async function syncDatabase() {
  try {
    await db.sync({ alter: true });
    console.log('Modelo sincronizado com o banco de dados.');
  } catch (err) {
    console.error('Erro ao sincronizar o modelo:', err);
  }
}

export { db, syncDatabase };