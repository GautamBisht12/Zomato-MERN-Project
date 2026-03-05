import foodModel from "../models/food.model.js"

const createFood = async (req, res) => {
    console.log(req.foodPartner)
    res.send("Food item created")
    console.log(req.body)
    console.log(req.file)
}

export { createFood }