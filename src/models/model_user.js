// models/model_user.js
export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    senha: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "colaborador" },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true },
  });

  return User;
};
