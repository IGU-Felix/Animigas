import { createComment } from "../model/Comment.js"
import { findUserById } from "../model/User.js";

export const newComment = async (req,res) => {
  try {
    const data = req.body;

    // Verifique se o usuário existe
    const user = await findUserById(data.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Crie o comentário
    await createComment({
      data: {
        content: data.content,
        anime: data.animeId,
        user: {
          connect: { id: data.userId } // Use connect para associar o comentário ao usuário existente
        }
      }
    });

    res.status(201).json("Comentário enviado!");
    } catch (error) {
        res
        .status(500)
        .json({ error: "Failed to create comment", message: error.message });
    }
}