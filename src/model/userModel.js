import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function getAllUsers() {
  return prisma.user.findMany();
}

export function createUser(data) {
  return prisma.user.create({ data });
}

export function updateUser(id, data) {
  return prisma.user.update({ where: { id: Number(id) }, data });
}

export function deleteUser(id) {
  return prisma.user.delete({ where: { id: Number(id) } });
}