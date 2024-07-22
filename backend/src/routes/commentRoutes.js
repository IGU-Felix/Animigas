import { Router } from "express"
import { newComment } from "../controllers/commentController.js"

const router = Router()

router.post("/comment", newComment)

export default router