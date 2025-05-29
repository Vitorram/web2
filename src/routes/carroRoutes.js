// src/routes/carro.routes.js
import { Router } from 'express';
import {
  createCarro,
  getCarros,
  getCarroById,
  updateCarro,
  deleteCarro
} from '../controllers/carroController.js';

const router = Router();

// /api/carros
router.post('/', createCarro);
router.get('/', getCarros);
router.get('/:id', getCarroById);
router.put('/:id', updateCarro);
router.delete('/:id', deleteCarro);

export default router;
