import prisma from '../prismaClient.js'

export const getCarros = async (req, res) => {
  const carros = await prisma.carro.findMany({ include: { usuario: true } });
  res.json(carros);
};

export const createCarro = async (req, res) => {
  const { modelo, preco, usuarioId } = req.body;
  const novoCarro = await prisma.carro.create({
    data: { modelo, preco, usuarioId: parseInt(usuarioId) },
  });
  res.json(novoCarro);
};

export const updateCarro = async (req, res) => {
  const { id } = req.params;
  const { modelo, preco } = req.body;
  const carroAtualizado = await prisma.carro.update({
    where: { id: parseInt(id) },
    data: { modelo, preco },
  });
  res.json(carroAtualizado);
};

export const deleteCarro = async (req, res) => {
  const { id } = req.params;
  await prisma.carro.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Carro deletado" });
};

