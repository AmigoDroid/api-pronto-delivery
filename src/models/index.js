// models/index.js
import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize("postgresql://neondb_owner:npg_L6YP0sTBxcqA@ep-rapid-star-a4pdddxk-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require", {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// importa models
import initUser from "./model_user.js";
import initFilial from "./model_filial.js";
import initCliente from "./model_cliente.js";
import initEnderecoCliente from "./model_enderecocliente.js";
import initColaborador from "./model_colaborador.js";
import initCategoria from "./model_categoria.js";
import initProduto from "./model_produto.js";
import initPedido from "./model_pedido.js";
import initPedidoItem from "./model_pedidoitem.js";
import initPagamento from "./model_pagamento.js";
import initLogAuditoria from "./model_logauditoria.js";

const User = initUser(sequelize, DataTypes);
const Filial = initFilial(sequelize, DataTypes);
const Cliente = initCliente(sequelize, DataTypes);
const EnderecoCliente = initEnderecoCliente(sequelize, DataTypes);
const Colaborador = initColaborador(sequelize, DataTypes);
const Categoria = initCategoria(sequelize, DataTypes);
const Produto = initProduto(sequelize, DataTypes);
const Pedido = initPedido(sequelize, DataTypes);
const PedidoItem = initPedidoItem(sequelize, DataTypes);
const Pagamento = initPagamento(sequelize, DataTypes);
const LogAuditoria = initLogAuditoria(sequelize, DataTypes);

// Associações
Filial.hasMany(Cliente, { foreignKey: "filialId" });
Cliente.belongsTo(Filial, { foreignKey: "filialId" });

Filial.hasMany(Colaborador, { foreignKey: "filialId" });
Colaborador.belongsTo(Filial, { foreignKey: "filialId" });

Filial.hasMany(Produto, { foreignKey: "filialId" });
Produto.belongsTo(Filial, { foreignKey: "filialId" });

Filial.hasMany(Pedido, { foreignKey: "filialId" });
Pedido.belongsTo(Filial, { foreignKey: "filialId" });

Cliente.hasMany(EnderecoCliente, { foreignKey: "clienteId" });
EnderecoCliente.belongsTo(Cliente, { foreignKey: "clienteId" });

Cliente.hasMany(Pedido, { foreignKey: "clienteId" });
Pedido.belongsTo(Cliente, { foreignKey: "clienteId" });

User.belongsTo(Filial, { foreignKey: "filialId" });
Filial.hasMany(User, { foreignKey: "filialId" });

Pedido.belongsTo(User, { as: "criadoPor", foreignKey: "criadoPorId" });
Pedido.belongsTo(User, { as: "atualizadoPor", foreignKey: "atualizadoPorId" });

Pedido.hasMany(PedidoItem, { foreignKey: "pedidoId" });
PedidoItem.belongsTo(Pedido, { foreignKey: "pedidoId" });

Produto.hasMany(PedidoItem, { foreignKey: "produtoId" });
PedidoItem.belongsTo(Produto, { foreignKey: "produtoId" });

Pedido.hasMany(Pagamento, { foreignKey: "pedidoId" });
Pagamento.belongsTo(Pedido, { foreignKey: "pedidoId" });

User.hasMany(LogAuditoria, { foreignKey: "userId" });
LogAuditoria.belongsTo(User, { foreignKey: "userId" });

// exporta
export {
  sequelize,
  User,
  Filial,
  Cliente,
  EnderecoCliente,
  Colaborador,
  Categoria,
  Produto,
  Pedido,
  PedidoItem,
  Pagamento,
  LogAuditoria,
};
