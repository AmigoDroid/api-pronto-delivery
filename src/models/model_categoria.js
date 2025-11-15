// models/model_categoria.js
export default (sequelize, DataTypes) => {
  const Categoria = sequelize.define("categoria", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.STRING }
  });

  return Categoria;
};
