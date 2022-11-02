'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('MonthlyControl',
      [
        {
          dia: 'SEG',
          data: '03/10/2022',
          horaEntrada: '09:00',
          horaSaida: '18:05',
          transporte: '9,60',
          bancoHora: '01:05',
          userId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          dia: 'TER',
          data: '04/10/2022',
          horaEntrada: '09:00',
          horaSaida: '17:15',
          transporte: '9,60',
          bancoHora: '00:15',
          userId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          dia: 'QUA',
          data: '05/10/2022',
          horaEntrada: '08:50',
          horaSaida: '17:50',
          transporte: '9,60',
          bancoHora: '01:00',
          userId: 3,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('MonthlyControl', null, {});
  }
};
