import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EStatusFlow, EOutflowUser, ETypeFlow } from "../types";
import { IOutflowUser } from "../type";

const MoneyOutflowUser = new Schema<IOutflowUser>(
    {
        previousBalance: {
            type: Number,
            required: true,
        },
        newBalance: {
            type: Number,
            required: true,
        },
        reason: {
            type: Number,
            enum: Object.values(EOutflowUser).filter(
                (value) => typeof value === "number"
            ),
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
        },
        receiveId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        type: {
            type: Number,
            enum: Object.values(ETypeFlow).filter(
                (value) => typeof value === "number"
            ),
        },
        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coin",
        },
        status: {
            type: Number,
            enum: Object.values(EStatusFlow).filter(
                (value) => typeof value === "number"
            ),
        },
        amount: {
            type: Number,
        },
    },
    configSchema
);
export default model<IOutflowUser>("outflowUser", MoneyOutflowUser);
