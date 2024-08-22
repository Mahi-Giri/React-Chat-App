import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());

import authRouts from "./routes/auth.route.js";

app.use("/api/v1/auth", authRouts)



export { app };
