const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {}

function initPessoa(sequelize) {
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isEmail: true },
      },
      location: {
        type: DataTypes.JSON, // { lat, lng }
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
    }
  );

  return Pessoa;
}

module.exports = initPessoa;
