import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { compare } from "bcrypt";

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

        const { password: userPassword, ...rest } = user._doc;
        return res.status(200).json(rest);
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(401).send("Please enter your email address and password");

        const user = await User.findOne({ email });

        if (!user) return res.status(404).send("User with the given email is not available");

        const auth = await compare(password, user.password);

        if (!auth) return res.status(400).send("Password incorrect");

        res.cookie("jwt", createToken(email, user._id), {
            maxAge,
            secure: true,
            sameSite: "None",
        });

        const { password: userPassword, ...rest } = user._doc;
        return res.status(200).json(rest);
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    }
};
