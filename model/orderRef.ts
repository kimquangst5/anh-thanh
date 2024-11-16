import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EStatusOrderRef, ETypeOrderRef } from "../types";
import { IOrderRef } from "../type";

const OrderRefSchema = new Schema<IOrderRef>(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
        },
        value: {
            type: Number,
        },
        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coin",
        },
        type: {
            type: Number,
            enum: Object.values(ETypeOrderRef).filter(
                (value) => typeof value === "number"
            ),
        },
        fromRefUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        toUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        status: {
            type: Number,
            enum: Object.values(EStatusOrderRef).filter(
                (value) => typeof value === "number"
            ),
        },
    },
    configSchema
);
export default model<IOrderRef>("orderRef", OrderRefSchema);
