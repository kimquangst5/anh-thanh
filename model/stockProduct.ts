import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EStatusStock } from "../types";

const StockProductSchema = new Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            index: true,
        },
        attributeProductId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "attributeProduct",
            index: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            index: true,
        },
        count: {
            type: Number,
            default: 0,
        },
        type: {
            type: Number,
            enum: Object.values(EStatusStock).filter(
                (value) => typeof value === "number"
            ),
        },
    },
    configSchema
);

export default model("stockProduct", StockProductSchema);
