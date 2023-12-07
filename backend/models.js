import mongoose from "mongoose";
import crypto from "crypto";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        default: () => crypto.randomBytes(128).toString("hex"),
    }
})

export const User = mongoose.model("User", UserSchema);