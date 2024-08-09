const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Appoinment = sequelize.define('Appoinment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  appointmentTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  appointmentReason: {
    type: DataTypes.STRING,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
  appointmentStatus: {
    type: DataTypes.ENUM('Active', 'Cancelled', 'Completed'),
    defaultValue: 'Active',
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
});

module.exports = Appoinment;