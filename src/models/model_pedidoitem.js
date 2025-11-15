// models/model_pedidoitem.js
export default (sequelize, DataTypes) => {
  const PedidoItem = sequelize.define("pedidoitem", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantidade: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    preco_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    subtotal: { type: DataTypes.DECIMAL(10,2), allowNull: false }
  });

  return PedidoItem;
};
