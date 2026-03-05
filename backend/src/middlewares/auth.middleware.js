import jwt from "jsonwebtoken"
import foodPartnerModel from "../models/foodpartner.model.js"

async function authfoodPartnerMiddleware(req, res, next) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const foodPartner = await foodPartnerModel.findById(decoded.id)
        if (!foodPartner) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        req.foodPartner = foodPartner
        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

export { authfoodPartnerMiddleware }