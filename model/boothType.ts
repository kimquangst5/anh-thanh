import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IBoothType } from "type";

const BoothTypeSchema = new Schema<IBoothType>(
    {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        value: {
            type: Number,
            required: true,
        },
    },
    configSchema
);

export default model<IBoothType>("boothType", BoothTypeSchema);
