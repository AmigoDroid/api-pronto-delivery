// models/model_cliente.js
export default (sequelize, DataTypes) => {
  const Cliente = sequelize.define("cliente", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, unique: true, allowNull: true },
    telefone: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    latitude: { type: DataTypes.STRING, allowNull: true },
    longitude: { type: DataTypes.STRING, allowNull: true }
  });

  return Cliente;
};
