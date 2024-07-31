import { findCommentById } from "../model/Comment.js";

export const getComments = async (req, res) => {
    try {
      const comment = await findCommentById(req.params.animeId);
      res.status(200).json({ comment });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get comments", message: error.message });
    }
  };

export const newComment = async (req, res) => {
  const { content, userId, animeId } = req.body;

  if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
  }

  try {
      // Verifica se o usuário existe
      const user = await prisma.signup.findUnique({
          where: { id: parseInt(userId, 10) }
      });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Cria o comentário
      const createComment = await prisma.comment.create({
          data: {
              content: content,
              userId: parseInt(userId),
              animeId: parseInt(animeId)
          }
      });

      res.status(201).json(createComment);
  } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};