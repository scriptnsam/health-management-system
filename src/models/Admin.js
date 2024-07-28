const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Admin = sequelize.schema({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  adminId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    defaultValue: DataTypes.UUIDV4
  },
  userbame: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
})

module.exports = Admin;