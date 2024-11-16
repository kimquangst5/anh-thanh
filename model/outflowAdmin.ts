import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EInflowAdmin, EOutflowAdmin, EStatusFlow, ETypeFlow } from "../types";
import { IInflowAdmin, IOutflowAdmin } from "../type";

const OutflowAdmin = new Schema<IOutflowAdmin>(
    {
        type: {
            type: Number,
            enum: Object.values(ETypeFlow).filter(
                (value) => typeof value === "number"
            ),
        },
        previousBalance: {
            type: Number,
            required: true,
        },
        newBalance: {
            type: Number,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        reason: {
            type: Number,
            enum: Object.values(EOutflowAdmin).filter(
                (value) => typeof value === "number"
            ),
        },
        receiveId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
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

export default model<IOutflowAdmin>("outflowAdmin", OutflowAdmin);
