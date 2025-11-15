// routes/filialRoutes.js
import express from 'express';
import { listFiliais, createFilial, getFilial } from '../controllers/filialController.js';
const router = express.Router();

router.get('/', listFiliais);
router.post('/', createFilial);
router.get('/:id', getFilial);

export default router;
