import { model, Schema } from "mongoose";
import { genSalt, hash } from "bcrypt";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter your email address"],
            unique: true,
        },

        password: {
            type: String,
            required: [true, "Please enter your password"],
        },

        firstName: {
            type: String,
        },

        lastName: {
            type: String,
        },

        image: {
            typeof: String,
        },

        color: {
            type: Number,
        },

        profileSetup: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = model("User", userSchema);

export default User;
