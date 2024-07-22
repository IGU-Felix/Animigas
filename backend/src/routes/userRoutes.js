import { Router } from "express"
import { cadastro , signin } from "../controllers/userController.js"

const router = Router()

router.post("/signup", cadastro)
router.post('/signin', signin);

export default router
