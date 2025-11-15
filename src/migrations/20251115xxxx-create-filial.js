'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('filials', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    slug: { type: Sequelize.STRING, allowNull: false, unique: true },
    endereco: { type: Sequelize.STRING, allowNull: false },
    telefone: { type: Sequelize.STRING },
    createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('filials');
}
