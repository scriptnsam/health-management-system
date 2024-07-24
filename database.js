const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hms', 'root', 'Password12)', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
