'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Patients",
      [
        {
          name:       "José Gervásio da Silva",
          email:      "jgervasio@teste.com",
          password:   "jgerv123",
          cpf:        "123.456.789-12",
          phone:      "(13)99999-8888",
          address:    "Rua 1, Bairro do Meio",
          dob:        "1956/12/14",
          gender:     "M",
          bloodType:  "A",
          createdAt:  new Date(),
          updatedAt:  new Date()
        }, 
        {
          name:       "Maria Gertrudes da Silva",
          email:      "mgertrudes@teste.com",
          password:   "mgert123",
          cpf:        "789.456.123-09",
          phone:      "(13)99998-8887",
          address:    "Rua 2, Bairro do Canto",
          dob:        "1953/07/12",
          gender:     "F",
          bloodType:  "O",
          createdAt:  new Date(),
          updatedAt:  new Date()
        }, 
        {
          name:       "José Augusto de Souza",
          email:      "jaugusto@teste.com",
          password:   "jaug123",
          cpf:        "456.123.789-43",
          phone:      "(13)99345-8883",
          address:    "Rua 15, Bairro da Frente",
          dob:        "2007/01/01",
          gender:     "O",
          bloodType:  "AB",
          createdAt:  new Date(),
          updatedAt:  new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Patients', null, {});
  }
};
