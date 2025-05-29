import prisma from '../prismaClient.js';

export async function getCarros() {
  return prisma.carro.findMany({ include: { usuario: true } });
}

export async function getCarroById(id) {
  return prisma.carro.findUnique({
    where: { id: Number(id) },
    include: { usuario: true }
  });
}

export async function createCarro(data) {
  return prisma.carro.create({ data });
}

export async function updateCarro(id, data) {
  return prisma.carro.update({
    where: { id: Number(id) },
    data
  });
}

export async function deleteCarro(id) {
  return prisma.carro.delete({
    where: { id: Number(id) }
  });
}
