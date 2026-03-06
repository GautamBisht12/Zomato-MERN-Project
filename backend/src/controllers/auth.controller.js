import userModel from "../models/user.model.js";
import foodPartnerModel from "../models/foodpartner.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {

    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            username: user.username,
            email: user.email
        }
    });


};

const loginUser = async (req, res) => {
    // your login logic here
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })
    console.log(user, "Login User")

    if (!user) {
        res.status(400).json({ message: "Invalid email or password" })
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password)

    if (!isPasswordvalid) {
        res.status(400).json({ message: "Invalid email or password" })
    }
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)
    res.cookie("token", token);

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            username: user.username,
            email: user.email
        }
    });
};

const logoutUser = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "User logged out successfully" })
}

const registerFoodPartner = async (req, res) => {

    const { username, email, password } = req.body;

    const isFoodPartnerAlreadyExist = await foodPartnerModel.findOne({ email });

    if (isFoodPartnerAlreadyExist) {
        return res.status(400).json({ message: "Food partner already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign(
        { id: foodPartner._id },
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.status(201).json({
        message: "Food partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            username: foodPartner.username,
            email: foodPartner.email
        }
    });


}

const loginFoodPartner = async (req, res) => {

    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordvalid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordvalid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
        { id: foodPartner._id },
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.status(200).json({
        message: "Food partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            username: foodPartner.username,
            email: foodPartner.email
        }
    });


}

const logoutFoodPartner = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "Food partner logged out successfully" })
}

export { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner };