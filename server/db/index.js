import { connect } from "mongoose";
import { DBName } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionResponse = await connect(`${process.env.DATABASE_URL}/${DBName}`);
        console.log(`Connected to the host ${connectionResponse.connection.host}`);
    } catch (error) {
        console.log(`Failed to connect to ${error}`);
        process.exit(1);
    }
};

export default connectDB;
