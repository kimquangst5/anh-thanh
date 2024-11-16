import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IHistoriesTransaction } from "type";
import { EStatusTransaction, ETypeTransaction, ETypeWallet } from "../types";

const HistoriesTransaction = new Schema<IHistoriesTransaction>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        from: {
            type: String,
        },
        to: {
            type: String,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusTransaction).filter(
                (value) => typeof value === "number"
            ),
            index: true,
        },
        value: {
            type: Number,
            required: true,
        },
        type: {
            type: Number,
            enum: Object.values(ETypeTransaction).filter(
                (value) => typeof value === "number"
            ),
        },
        wallet: {
            type: String,
        },
        txn: {
            type: String,
        },
        memo: {
            type: String,
        },
    },
    configSchema
);
export default model<IHistoriesTransaction>(
    "historiesTransaction",
    HistoriesTransaction
);
