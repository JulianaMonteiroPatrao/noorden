'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({
    name: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
    password: DataTypes.STRING(8),
    cpf: DataTypes.STRING(14),
    phone: DataTypes.STRING(12),
    address: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING(1),
    bloodType: DataTypes.STRING(2)
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};