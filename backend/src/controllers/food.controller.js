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

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id

    })

    res.status(201).json({
        message: "Food item created successfully",
        food: foodItem
    })
}

const getFoodItems = async (req, res) => {
    const foodItems = await foodModel.find()
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

export { createFood, getFoodItems }