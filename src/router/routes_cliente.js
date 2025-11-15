import { Router } from "express";
import ClienteController from "../controller/controller_cliente.js";

const router = Router();

router.get("/", ClienteController.listar);
router.get("/:id", ClienteController.buscar);
router.post("/", ClienteController.criar);
router.put("/:id", ClienteController.atualizar);
router.delete("/:id", ClienteController.deletar);

export default router;
