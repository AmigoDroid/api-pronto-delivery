import { Router } from "express";
import ProdutoController from "../controller/controller_produto.js";

const router = Router();

router.get("/", ProdutoController.listar);
router.post("/", ProdutoController.criar);
router.put("/:id", ProdutoController.atualizar);
router.delete("/:id", ProdutoController.deletar);

export default router;
