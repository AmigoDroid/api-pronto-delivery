import { Router } from "express";
import ColaboradorController from "../controller/controller_colaborador.js";

const router = Router();

router.get("/", ColaboradorController.listar);
router.get("/:id", ColaboradorController.buscar);
router.post("/", ColaboradorController.criar);
router.put("/:id", ColaboradorController.atualizar);
router.delete("/:id", ColaboradorController.deletar);

export default router;
