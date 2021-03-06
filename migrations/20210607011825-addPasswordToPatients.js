'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
    "Patients",
    "password",
    {
      type: Sequelize.DataTypes.STRING
    }
       );
    },
  
    down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Patients", "password");
    }
};
