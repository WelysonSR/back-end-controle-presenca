'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          logradouro: 'Rua Estrela',
          complemento: 'proximo ao JA mercadinho',
          bairro: 'Cajazeiras VIII',
          localidade: 'Salvador',
          cep: '01001-000',
          uf: 'SP',
          userId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          logradouro: 'Rua Estrela',
          complemento: 'proximo ao JA mercadinho',
          bairro: 'Bairro da Paz',
          localidade: 'Salvador',
          cep: '01001-000',
          uf: 'SP',
          userId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          logradouro: 'Rua Estrela',
          complemento: 'proximo ao JA mercadinho',
          bairro: 'Fazenda Grande I',
          localidade: 'Salvador',
          cep: '01001-000',
          uf: 'SP',
          userId: 3,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
