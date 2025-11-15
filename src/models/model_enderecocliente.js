// models/model_endereco_cliente.js
export default (sequelize, DataTypes) => {
  const EnderecoCliente = sequelize.define("enderecocliente", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    tipo: DataTypes.STRING
  });

  return EnderecoCliente;
};
