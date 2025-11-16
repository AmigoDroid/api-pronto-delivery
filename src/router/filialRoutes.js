// routes/filialRoutes.js
import express from 'express';
import filialController from '../controllers/filialController.js';
const router = express.Router();

router.get('/', filialController.listar);
router.post('/', filialController.criar);
router.get('/:id', filialController.buscar);

export default router;
