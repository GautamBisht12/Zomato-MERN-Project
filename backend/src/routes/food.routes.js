import express from "express"
import { createFood, getFoodItems } from "../controllers/food.controller.js"
import { authfoodPartnerMiddleware } from "../middlewares/auth.middleware.js"
import multer from "multer"


const router = express.Router()
const upload = multer({
    storage: multer.memoryStorage()
})


router.post("/", authfoodPartnerMiddleware, upload.single("video"), createFood)

router.get("/", getFoodItems)

export default router