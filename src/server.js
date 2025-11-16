// server.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";

// Sequelize
import { sequelize } from "./models/index.js";

// Rotas
import filialRoutes from "./routes/routes_filial.js";
import clienteRoutes from "./routes/routes_cliente.js";
import colaboradorRoutes from "./routes/routes_colaborador.js";
import pedidoRoutes from "./routes/routes_pedido.js";
import produtoRoutes from "./routes/routes_produto.js";
import categoriaRoutes from "./routes/routes_categoria.js";

// Auth (JWT)
import jwt from "jsonwebtoken";

// =========================================
// Middleware de autenticação JWT
// =========================================
const jwtSecret = process.env.JWT_SECRET || "secret";

export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "No token" });

  const token = auth.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
}

// =========================================
// Inicialização do app
// =========================================
const app = express();
app.use(cors());
app.use(bodyParser.json());

// =========================================
// Prefixo /api em TODAS as rotas
// =========================================
app.use("/api/filiais", filialRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/colaboradores", colaboradorRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/produtos", produtoRoutes);
app.use("/api/categorias", categoriaRoutes);

// =========================================
// Servidor + DB
// =========================================
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");

    await sequelize.sync({ alter: true }); // só em desenvolvimento

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (err) {
    console.error("Erro ao conectar no DB:", err);
  }
})();
