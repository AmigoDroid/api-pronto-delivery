import { Router } from "express";
import FilialController from "../controller/controller_filial.js";

const router = Router();

router.get("/", FilialController.listar);
router.get("/:id", FilialController.buscar);
router.post("/", FilialController.criar);
router.put("/:id", FilialController.atualizar);
router.delete("/:id", FilialController.deletar);

export default router;
