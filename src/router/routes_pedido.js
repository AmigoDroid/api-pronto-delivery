import { Router } from "express";
import PedidoController from "../controller/controller_pedido.js";

const router = Router();

router.get("/", PedidoController.listar);
router.get("/:id", PedidoController.buscar);
router.post("/", PedidoController.criar);
router.put("/:id", PedidoController.atualizar);
router.delete("/:id", PedidoController.deletar);

export default router;
