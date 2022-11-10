'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users',
    [
      {
        firstName: 'Welyson',
        lestName: 'Rosa',
        email: 'welyson12@hotmail.com',
        password: 'a94e404783ec52352eae369b0cf3c002',
        cpf: '788.714.877-45',
        phone: '(65)2176-4666',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Sam',
        lestName: 'Winchester',
        email: 'sam@gmail.com',
        password: 'c13584836e74b71f6dd2db9e5595c476',
        cpf: '788.714.877-45',
        phone: '(68)2147-4322',
        role: 'boss',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Castiel',
        lestName: 'Winchester',
        email: 'castiel@gmail.com',
        password: '23b00861aacaba2ac9be0a0a7ebcddcf',
        cpf: '788.714.877-45',
        phone: '(49)3266-1169',
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
