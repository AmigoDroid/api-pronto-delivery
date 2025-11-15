export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pedidos", {
      pedidoId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "clientes", key: "clienteId" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      filialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "filiais", key: "filialId" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      valorTotal: { type: Sequelize.FLOAT, allowNull: false },

      status: {
        type: Sequelize.ENUM("pendente", "preparando", "saiu_entrega", "entregue", "cancelado"),
        defaultValue: "pendente",
      },

      dataPedido: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },

      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("pedidos");
  },
};
