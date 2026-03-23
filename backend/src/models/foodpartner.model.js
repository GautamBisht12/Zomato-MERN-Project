import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const FoodPartner = mongoose.model("foodPartner", foodPartnerSchema)

export default FoodPartner