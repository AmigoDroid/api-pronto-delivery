import express from "express";
import filialRoutes from "./routes/routes_filial.js";
import clienteRoutes from "./routes/routes_cliente.js";
import colaboradorRoutes from "./routes/routes_colaborador.js";
import pedidoRoutes from "./routes/routes_pedido.js";
import produtoRoutes from "./routes/routes_produto.js";
import categoriaRoutes from "./routes/routes_categoria.js";

const app = express();

app.use(express.json());

app.use("/api/filiais", filialRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/colaboradores", colaboradorRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/produtos", produtoRoutes);
app.use("/api/categorias", categoriaRoutes);

export default app;
