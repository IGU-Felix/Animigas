import { prisma } from "../../config/prisma.js"

export const createComment = async (data) => {
  return prisma.comment.create(data); // Ajustado para aceitar um objeto de dados
}