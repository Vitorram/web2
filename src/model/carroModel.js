import * as carroModel from '../models/carroModel.js'

export const getCarros = async (req, res) => {
  const carros = await carroModel.getTodosCarros();
  res.json(carros);
};

export const createCarro = async (req, res) => {
  const { modelo, preco } = req.body;
  const novoCarro = await carroModel.criarCarro({ modelo, preco });
  res.json(novoCarro);
};

export const updateCarro = async (req, res) => {
  const { id } = req.params;
  const { modelo, preco } = req.body;
  const carroAtualizado = await carroModel.atualizarCarro(id, { modelo, preco });
  res.json(carroAtualizado);
};

export const deleteCarro = async (req, res) => {
  const { id } = req.params;
  await carroModel.deletarCarro(id);
  res.json({ message: "Carro deletado" });
};

export const vincularUsuario = async (req, res) => {
  const { carroId, usuarioId } = req.body;
  const resultado = await carroModel.adicionarUsuarioAoCarro(carroId, usuarioId);
  res.json(resultado);
};
