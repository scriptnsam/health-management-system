const sequelize = require('../../database');
const Appoinment = require('../models/Appoinment');
const associateModels = require('../models/associations');
const { Doctor } = require('../models/Doctor');
const { Patient } = require('../models/Patient');

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    associateModels();
    await sequelize.sync();
    console.log('All models were synchronized successfully.');

  } catch (error) {
    console.error('Unable to sync models with the database:', error);
  }
}

syncModels();
