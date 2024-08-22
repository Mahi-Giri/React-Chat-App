import jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userID) => {
    return jwt.sign({ email, userID }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(401).send("Please enter your email address and password");

        const user = await User.create({ email, password });

        res.cookie("jwt", createToken(email, user._id), {
            maxAge,
            secure: true,
            sameSite: "None",
        });

        return res.status(201).json({
            user: {
                id: user._id,
                email: user.email,
                profileSetup: user.profileSetup,
            },
        });
    } catch (error) {
        console.log(error.message);
        return res.status(error.statusCode).send("Internal Server Error");
    }
};
