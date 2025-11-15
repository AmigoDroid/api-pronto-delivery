'use strict';
export async function up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('filials', [
    { nome: 'Filial Centro', slug: 'filial-centro', endereco: 'R. Principal, 123', telefone: '999999999', createdAt: new Date(), updatedAt: new Date() },
    { nome: 'Filial Norte', slug: 'filial-norte', endereco: 'Av. Norte, 45', telefone: '988888888', createdAt: new Date(), updatedAt: new Date() }
  ], {});
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('filials', null, {});
}
