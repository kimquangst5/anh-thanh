import { Schema, SchemaType, model } from "mongoose";
import bcrypt from "bcrypt";
import { configSchema } from "../configs/modules";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: Number,
            default: 1,
        },
        avatar: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
        },
    },
    configSchema
);

UserSchema.methods = {
    comparePass(pass: string) {
        return bcrypt.compare(pass, this.password);
    },
};

export default model("users", UserSchema);
