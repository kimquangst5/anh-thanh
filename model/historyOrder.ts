import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EStatusHistoryOrder } from "../types";
import { IHistoryOrder } from "../type";

const HistoryOrderSchema = new Schema<IHistoryOrder>(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
        },
        content: {
            type: String,
            default: null,
        },
        file: {
            type: [String],
            default: null,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        status: {
            type: Number,
            enum: Object.values(EStatusHistoryOrder).filter(
                (value) => typeof value === "number"
            ),
        },
    },
    configSchema
);
export default model<IHistoryOrder>("historyOrder", HistoryOrderSchema);
