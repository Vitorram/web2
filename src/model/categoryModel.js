import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function create(data) {
  return await prisma.category.create({ data });
}

export async function update(id, data) {
  return await prisma.category.update({
    where: { id },
    data
  });
}

export async function remove(id) {
  return await prisma.category.delete({
    where: { id }
  });
}

export async function getList() {
  return await prisma.category.findMany();
}

export async function getById(id) {
  return await prisma.category.findUnique({
    where: { id }
  });
}
