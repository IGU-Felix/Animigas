import { createComment } from "../model/Comment.js"

export const newComment = async (req,res) => {
    try {
        const data = req.body

        await createComment (
          {
            content: data.content,
            userId: data.userId
          }  
        )

        res.status(201).json("Comentário enviado!")
    } catch (error) {
        res
        .status(500)
        .json({ error: "Failed to create user", message: error.message });
    }
}