// models/model_pedido.js
export default (sequelize, DataTypes) => {
  const Pedido = sequelize.define("pedido", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.ENUM("pendente","preparando","entregando","concluido","cancelado"), defaultValue: "pendente" },
    valor_total: { type: DataTypes.DECIMAL(10,2), allowNull: false, defaultValue: 0 },
    observacoes: { type: DataTypes.STRING },
    taxa_entrega: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
    criadoPorId: { type: DataTypes.INTEGER, allowNull: true },
    atualizadoPorId: { type: DataTypes.INTEGER, allowNull: true }
  });

  return Pedido;
};
