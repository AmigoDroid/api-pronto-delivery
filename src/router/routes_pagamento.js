import { Router } from "express";
import pagamentoController from "../controllers/pagemento_Controller.js";

const router = Router();

// Criar pagamento
router.post("/", pagamentoController.create);

// Listar todos os pagamentos
router.get("/", pagamentoController.getAll);

// Buscar pagamento por ID
router.get("/:id", pagamentoController.getById);

// Atualizar pagamento
router.put("/:id", pagamentoController.update);

// Deletar pagamento
router.delete("/:id", pagamentoController.delete);

export default router;
