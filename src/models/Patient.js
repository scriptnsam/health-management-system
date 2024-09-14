const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  patientNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Invalid email"
      }
    },
    unique: {
      msg: "Email already exists"
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  regDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Function to generate a unique patient number
const generatePatientNo = async () => {
  let patientNo;
  let isUnique = false;

  while (!isUnique) {
    patientNo = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number

    // Check if the generated patient number is unique
    const existingPatient = await Patient.findOne({ where: { patientNo } });
    if (!existingPatient) {
      isUnique = true;
    }
  }

  return patientNo;
};

module.exports = { Patient, generatePatientNo };