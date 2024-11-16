import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { ICoin } from "../type";

const CoinSchema = new Schema<ICoin>(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    configSchema
);

export default model<ICoin>("coin", CoinSchema);
