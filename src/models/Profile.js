const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Profile = sequelize.define('Medical_Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  geno_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  allergies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  medications: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  conditions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  surgeries: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  current_medications: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Profile;