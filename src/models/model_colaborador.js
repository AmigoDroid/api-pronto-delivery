// models/model_colaborador.js
export default (sequelize, DataTypes) => {
  const Colaborador = sequelize.define("colaborador", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, unique: true, allowNull: true },
    cargo: { type: DataTypes.STRING, allowNull: true }
  });

  return Colaborador;
};
