import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { configSchema } from "../configs/modules";
import { ERole, EMethod, EStatusUser } from "../types";
import { IUser } from "../type";

const UserSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            min: 6,
            default: null,
        },
        inviteCode: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: Number,
            enum: Object.values(ERole).filter(
                (value) => typeof value === "number"
            ),
            default: 1,
        },
        method: {
            type: Number,
            required: true,
            enum: Object.values(EMethod).filter(
                (value) => typeof value === "number"
            ),
        },
        phone: {
            type: String,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusUser).filter(
                (value) => typeof value === "number"
            ),
            required: true,
        },
        balance: {
            type: Number,
            default: 0,
        },
        balanceToken: {
            type: Number,
            default: 0,
        },
        refreshToken: {
            type: String,
        },
        referrerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            default: null,
        },
        idGoogle: {
            type: String,
            default: null,
        },
    },
    configSchema
);
UserSchema.methods = {
    comparePass(pass: string) {
        return bcrypt.compare(pass, this.password);
    },
};
export default model<IUser>("user", UserSchema);
