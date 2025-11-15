// models/model_produto.js
export default (sequelize, DataTypes) => {
  const Produto = sequelize.define("produto", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    preco: { type: DataTypes.DECIMAL(10,2), allowNull: false, defaultValue: 0 },
    descricao: { type: DataTypes.STRING },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  });

  return Produto;
};
