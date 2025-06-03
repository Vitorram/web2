import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const { z } = require("zod");
 
const transactionSchema = z.object({
  title: z.string().min(1, "titulo é obrigatório"),
  amout: z.number().positive("Valor deve ser positivo"),
  categoryId: z.string().uuid("Id de carytegoria invalido"),
  type: z.enum (['income' , 'expense'], "Tipo incorreto")
})

export async function create(data) {

  const parsed = transactionSchema.safeParse(req.body);

  if (!parsed.success){
    return resizeBy.status(400).json({
      erros: parsed.error.format()
    })

  }
  return await prisma.transaction.create({ data: parsed.data });
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
