import foodModel from "../models/food.model.js"
import { uploadFile } from "../services/storage.service.js"
import { v4 as uuidv4 } from "uuid"

const createFood = async (req, res) => {
    console.log(req.foodPartner)
    res.send("Food item created")
    console.log(req.body)
    console.log(req.file)
    const fileUploadResult = await uploadFile(req.file.buffer, uuidv4())
    console.log(fileUploadResult)
}

export { createFood }