const Appoinment = require("./Appoinment");
const { Doctor } = require("./Doctor");
const { Patient } = require("./Patient");


// Export a function that sets up association
module.exports = () => {
  // Defines Association Between Models
  Appoinment.belongsTo(Patient, { foreignKey: 'patientId', targetKey: 'patientId' });
  Appoinment.belongsTo(Doctor, { foreignKey: 'doctorId', targetKey: 'doctorId' });

  Patient.hasMany(Appoinment, { foreignKey: 'patientId', sourceKey: 'patientId' });
  Doctor.hasMany(Appoinment, { foreignKey: 'doctorId', sourceKey: 'doctorId' });
}