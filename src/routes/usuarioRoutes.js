import express from "express";
import {
  createUsuarioController,
  getUsuariosController,
  getUsuarioByIdController,
  updateUsuarioController,
  deleteUsuarioController,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", getUsuariosController);
router.get("/:id", getUsuarioByIdController);
router.post("/", createUsuarioController);
router.put("/:id", updateUsuarioController);
router.delete("/:id", deleteUsuarioController);

export default router;
