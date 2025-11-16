import { Router } from "express";
import CategoriaController from "../controllers/controller_categoria.js";

const router = Router();

router.get("/", CategoriaController.listar);
router.post("/", CategoriaController.criar);
router.put("/:id", CategoriaController.atualizar);
router.delete("/:id", CategoriaController.deletar);

export default router;
