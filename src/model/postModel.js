import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function getAllPosts() {
  return prisma.post.findMany({ include: { author: true } });
}

export function createPost(data) {
  return prisma.post.create({ data });
}

export function updatePost(id, data) {
  return prisma.post.update({ where: { id: Number(id) }, data });
}

export function deletePost(id) {
  return prisma.post.delete({ where: { id: Number(id) } });
}