import prisma from '../prismaClient.js';

export async function createCarro(data) {
  // data: { modelo, preco, ano, usuarioId }
  return await prisma.carro.create({ data });
}

export async function getCarros() {
  return await prisma.carro.findMany({
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
          email: true
        }
      }
    }
  });
}

export async function getCarroById(id) {
  return await prisma.carro.findUnique({
    where: { id: Number(id) },
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
          email: true
        }
      }
    }
  });
}