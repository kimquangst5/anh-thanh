import { IWithdraw } from "../type";
import { configSchema } from "../configs/modules";
import mongoose, { Schema, model } from "mongoose";
import { EStatusWithdraw } from "../types";

const WithdrawSchema = new Schema<IWithdraw>(
    {
        address: {
            type: String,
            required: true,
        },
        network: {
            type: String,
            required: true,
        },
        coin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coin",
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        status: {
            type: Number,
            enum: Object.values(EStatusWithdraw).filter(
                (value) => typeof value === "number"
            ),
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        memo: {
            type: String,
        },
        outflowUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "outflowUser",
        },
    },
    configSchema
);
export default model<IWithdraw>("withdraw", WithdrawSchema);
