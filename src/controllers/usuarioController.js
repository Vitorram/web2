import prisma from '../prismaClient.js'

export const getUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany({ include: { carros: true } });
  res.json(usuarios);
};

export const createUsuario = async (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = await prisma.usuario.create({ data: { nome, email } });
  res.json(novoUsuario);
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const usuarioAtualizado = await prisma.usuario.update({
    where: { id: parseInt(id) },
    data: { nome, email },
  });
  res.json(usuarioAtualizado);
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  await prisma.usuario.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Usuário deletado" });
};