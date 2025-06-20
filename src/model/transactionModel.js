import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const transactionSchema = z.object({
  title: z.string({
    required_error: "O título é obrigatório.",
    invalid_type_error: "O título deve ser um texto."
  }).min(1, "O título é obrigatório."),

  amount: z.number({
    required_error: "O valor é obrigatório.",
    invalid_type_error: "O valor deve ser numérico."
  }).positive("O valor deve ser positivo."),

 categoryId: z.number({
  required_error: "O ID da categoria é obrigatório.",
  invalid_type_error: "O ID da categoria deve ser um número."
}),

  type: z.enum(['income', 'expense'], {
    required_error: "O tipo é obrigatório.",
    invalid_type_error: "O tipo deve ser 'income' ou 'expense'."
  })
});

export const transactionValidator = (transaction, partial = null) => {
  if (partial) {
    return transactionSchema.partial(partial).safeParse(transaction);
  }
  return transactionSchema.safeParse(transaction);
};

export async function create(transaction) {
  const parsed = transactionValidator(transaction);
  if (!parsed.success) throw parsed.error;

  return await prisma.transaction.create({
    data: parsed.data
  });
}

export async function update(id, transaction) {
  const parsed = transactionValidator(transaction);
  if (!parsed.success) throw parsed.error;

  return await prisma.transaction.update({
    where: { id },
    data: parsed.data
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
