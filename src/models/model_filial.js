// models/model_filial.js
export default (sequelize, DataTypes) => {
  const Filial = sequelize.define("filial", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true },
    endereco: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING }
  });

  return Filial;
};
