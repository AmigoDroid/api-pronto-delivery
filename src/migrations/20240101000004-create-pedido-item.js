export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pedido_itens", {
      itemId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

      pedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pedidos", key: "pedidoId" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      nome: { type: Sequelize.STRING, allowNull: false },
      quantidade: { type: Sequelize.INTEGER, defaultValue: 1 },
      precoUnitario: { type: Sequelize.FLOAT, allowNull: false },
      observacoes: { type: Sequelize.STRING },

      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("pedido_itens");
  },
};
