// models/model_pagamento.js
export default (sequelize, DataTypes) => {
  const Pagamento = sequelize.define("pagamento", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    valor: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    metodo: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    transacao_gateway: { type: DataTypes.STRING }
  });

  return Pagamento;
};
