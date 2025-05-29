import prisma from '../prismaClient.js';

export async function createUsuario(data) {
  return await prisma.usuario.create({ data });
}

export async function getUsuarios() {
  return prisma.usuario.findMany({
    include: {
      carros: {
        select: {
          id: true,
          modelo: true,
          preco: true,
          ano: true
        }
      }
    }
  });
}

export async function getUsuarioById(id) {
  return prisma.usuario.findUnique({
    where: { id: Number(id) },
    include: {
      carros: {
        select: {
          id: true,
          modelo: true,
          preco: true,
          ano: true
        }
      }
    }
  });
}

export async function updateUsuario(id, data) {
  return await prisma.usuario.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteUsuario(id) {
  return await prisma.usuario.delete({
    where: { id: parseInt(id) },
  });
}
