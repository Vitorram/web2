import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "../model/usuarioModel.js";

export async function getUsuariosController(req, res, next) {
  try {
    const usuarios = await getUsuarios();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
}

export async function getUsuarioByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const usuario = await getUsuarioById(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

export async function createUsuarioController(req, res, next) {
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({
        message: "Nome e e-mail são obrigatórios.",
      });
    }

    const usuario = await createUsuario({ nome, email });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      usuario,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateUsuarioController(req, res, next) {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({
        message: "Nome e e-mail são obrigatórios.",
      });
    }

    const usuario = await updateUsuario(id, { nome, email });

    res.json({
      message: "Usuário atualizado com sucesso!",
      usuario,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteUsuarioController(req, res, next) {
  try {
    const { id } = req.params;

    await deleteUsuario(id);

    res.json({
      message: "Usuário deletado com sucesso!",
    });
  } catch (error) {
    next(error);
  }
}
