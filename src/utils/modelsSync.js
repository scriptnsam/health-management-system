const sequelize = require('../../database');

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to sync models with the database:', error);
  }
}

syncModels();
