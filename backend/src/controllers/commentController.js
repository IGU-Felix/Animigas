import { createComment } from "../model/Comment.js";
import { findUserById } from "../model/User.js";

// export const newComment = async (req, res) => {
//   try {
//     const data = req.body;

//     // Verifique se o usuário existe
//     const user = await findUserById(data.userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Crie o comentário
//     await createComment({
//       data: {
//         content: data.content,
//         animeId: data.animeId, // Use o nome correto da propriedade aqui
//         user: {
//           connect: { id: data.userId } // Use connect para associar o comentário ao usuário existente
//         }
//       }
//     });

//     res.status(201).json("Comentário enviado!");
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create comment", message: error.message });
//   }
// };



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