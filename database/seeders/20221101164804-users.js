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
        firstName: 'John',
        lestName: 'Winchester',
        email: 'john@gmail.com',
        password: '8241aefbdaf5ba61bedc3949d4e23273',
        cpf: '788.714.877-45',
        phone: '(68)2147-4322',
        role: 'employee',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Dean',
        lestName: 'Winchester',
        email: 'dean@gmail.com',
        password: '8241aefbdaf5ba61bedc3949d4e23273',
        cpf: '788.714.877-45',
        phone: '(68)2147-4322',
        role: 'employee',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Sam',
        lestName: 'Winchester',
        email: 'sam@gmail.com',
        password: '8241aefbdaf5ba61bedc3949d4e23273',
        cpf: '788.714.877-45',
        phone: '(68)2147-4322',
        role: 'employee',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Castiel',
        lestName: 'Winchester',
        email: 'castiel@gmail.com',
        password: '8241aefbdaf5ba61bedc3949d4e23273', // j5$Ych1&S5
        cpf: '788.714.877-45',
        phone: '(49)3266-1169',
        role: 'employee',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Crowley',
        lestName: 'Mater',
        email: 'crowley@gmail.com',
        password: '8241aefbdaf5ba61bedc3949d4e23273',
        cpf: '788.714.877-45',
        phone: '(68)2147-4322',
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
