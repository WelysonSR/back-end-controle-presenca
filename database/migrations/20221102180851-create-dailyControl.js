'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('MonthlyControl', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dia: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      horaEntrada: {
        type: Sequelize.STRING
      },
      horaSaida: {
        type: Sequelize.STRING
      },
      transporte: {
        type: Sequelize.STRING
      },
      bancoHora: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        // references: {
        //   model: 'users',
        //   key: 'id',
        // },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('MonthlyControl');
  }
};
