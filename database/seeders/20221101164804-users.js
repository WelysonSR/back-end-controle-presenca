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
        password: 'Dean@12345',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Sam',
        lestName: 'Winchester',
        email: 'sam@gmail.com',
        password: 'c13584836e74b71f6dd2db9e5595c476',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Castiel',
        lestName: 'Winchester',
        email: 'castiel@gmail.com',
        password: '23b00861aacaba2ac9be0a0a7ebcddcf',
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
