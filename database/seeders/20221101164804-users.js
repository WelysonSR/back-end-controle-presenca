'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users',
    [
      {
        firstName: 'Dean',
        lestName: 'Winchester',
        email: 'dean@gmail.com',
        password: '2110@WTg',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Sam',
        lestName: 'Winchester',
        email: 'sam@gmail.com',
        password: 'N#XKt52J1j6',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Castiel',
        lestName: 'Winchester',
        email: 'castiel@gmail.com',
        password: '1v8Z!zZ5z',
        role: 'employee',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});

  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
