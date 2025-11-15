// models/model_logauditoria.js
export default (sequelize, DataTypes) => {
  const LogAuditoria = sequelize.define("logauditoria", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tabela: { type: DataTypes.STRING },
    acao: { type: DataTypes.STRING },
    antes: { type: DataTypes.TEXT },
    depois: { type: DataTypes.TEXT }
  });

  return LogAuditoria;
};
