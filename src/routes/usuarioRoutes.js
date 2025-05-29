import express from 'express'
import {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  vincularCarro
} from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/', getUsuarios)
router.post('/', createUsuario)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)
router.post('/vincular-carro', vincularCarro)

export default router
