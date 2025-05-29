import express from 'express'
import {
  getCarros,
  createCarro,
  updateCarro,
  deleteCarro,
  vincularUsuario
} from '../controllers/carroController.js'

const router = express.Router()

router.get('/', getCarros)
router.post('/', createCarro)
router.put('/:id', updateCarro)
router.delete('/:id', deleteCarro)
router.post('/vincular-usuario', vincularUsuario)

export default router