import { prisma } from "../../config/prisma.js"

export const createComment = async (data) => {
    return await prisma.comment.create({
        data: {
          content: data.content,
          userId: data.userId
        },
      });
}