import { Router } from "express"
import { getComments, newComment } from "../controllers/commentController.js"

const router = Router()

router.post("/comment", newComment)

router.get("/lookcomment/:animeId", getComments)

export default router