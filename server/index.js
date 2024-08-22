import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3003, () => {
            console.log(`Server is running it http://localhost:${process.env.PORT || 3003}`);
        });
    })
    .catch((err) => {
        console.log(`Unable to connect mongoDB server ${err}`);
    });
