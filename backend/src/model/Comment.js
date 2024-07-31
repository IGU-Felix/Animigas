import { prisma } from "../../config/prisma.js"

export const createComment = async (data) => {
  return prisma.comment.create(data); // Ajustado para aceitar um objeto de dados
}

export const findCommentById = async (id) => {
  return prisma.comment.findMany({
    where: { animeId: Number(id) } // Certifique-se de que o ID é um número
  });
}