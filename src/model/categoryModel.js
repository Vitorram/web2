import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { z } from 'zod'

const categorySchema = z.object({
  name: z.string().min(1, "Nome da categoria é obrigatorio")
})

export async function create(data) {
  const parsed = categorySchema.safeParse(data);
  if(!parsed.success){
    throw parsed.error;
  }

  return await prisma.category.create({ data: parsed.data });
}


export async function update(id, data) {
  const parsed = categorySchema.safeParse(data);
  if(!parsed.success){
    throw parsed.error;
  }

  return await prisma.category.update({
    where: { id },
    data: parsed.data
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
