import * as usuarioModel from '../models/usuarioModel.js'

export const getUsuarios = async (req, res) => {
  const usuarios = await usuarioModel.getTodosUsuarios();
  res.json(usuarios);
};

export const createUsuario = async (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = await usuarioModel.criarUsuario({ nome, email });
  res.json(novoUsuario);
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const usuarioAtualizado = await usuarioModel.atualizarUsuario(id, { nome, email });
  res.json(usuarioAtualizado);
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  await usuarioModel.deletarUsuario(id);
  res.json({ message: "Usuário deletado" });
};

export const vincularCarro = async (req, res) => {
  const { usuarioId, carroId } = req.body;
  const resultado = await usuarioModel.adicionarCarroAoUsuario(usuarioId, carroId);
  res.json(resultado);
};