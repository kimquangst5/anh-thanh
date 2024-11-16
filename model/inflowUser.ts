import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EInflowUser, EStatusFlow, ETypeFlow } from "../types";
import { IInflowUser } from "../type";

const MoneyInflowUser = new Schema<IInflowUser>(
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
            enum: Object.values(EInflowUser).filter(
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
            default: null,
        },
        receiveId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coin",
        },
        type: {
            type: Number,
            enum: Object.values(ETypeFlow).filter(
                (value) => typeof value === "number"
            ),
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
        fromUserRef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            default: null,
        },
    },
    configSchema
);
export default model<IInflowUser>("inflowUser", MoneyInflowUser);
