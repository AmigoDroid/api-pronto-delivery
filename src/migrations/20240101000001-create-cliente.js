export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clientes", {
      clienteId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: Sequelize.STRING, allowNull: false },
      cpf: { type: Sequelize.STRING, allowNull: false, unique: true },
      endereco: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      location: { type: Sequelize.JSON },
      senha: { type: Sequelize.STRING, allowNull: false },
      totalGasto: { type: Sequelize.FLOAT, defaultValue: 0 },
      pedidoAtual: { type: Sequelize.JSON },
      historicoPedidos: { type: Sequelize.JSON },

      filialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "filiais", key: "filialId" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("clientes");
  },
};
