import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function create(data) {
  return await prisma.transaction.create({ data });
}

export async function update(id, data) {
  return await prisma.transaction.update({
    where: { id },
    data
  });
}

export async function remove(id) {
  return await prisma.transaction.delete({
    where: { id }
  });
}

export async function getList() {
  return await prisma.transaction.findMany({
    include: { category: true }
  });
}

export async function getById(id) {
  return await prisma.transaction.findUnique({
    where: { id },
    include: { category: true }
  });
}
