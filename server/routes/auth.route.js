import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const authRouts = Router();

authRouts.post("/signup", signup);

export default authRouts;
