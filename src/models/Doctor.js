const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  doctorNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
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

// Function to generate a unique patient number
const generateDoctorNo = async () => {
  let doctorNo;
  let isUnique = false;

  while (!isUnique) {
    doctorNo = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number

    // Check if the generated patient number is unique
    const existingDoctor = await Doctor.findOne({ where: { doctorNo } });
    if (!existingDoctor) {
      isUnique = true;
    }
  }

  return doctorNo;
};

module.exports = { Doctor, generateDoctorNo };