import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IAttributeProduct } from "type";
import { EStatusAttribute, EStyleAttribute } from "../types";

const AttributeProductSchema = new Schema<IAttributeProduct>(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        name: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusAttribute).filter(
                (value) => typeof value === "number"
            ),
            index: true,
        },
        style: {
            type: Number,
            enum: Object.values(EStyleAttribute).filter(
                (value) => typeof value === "number"
            ),
        },
    },
    configSchema
);
export default model<IAttributeProduct>(
    "attributeProduct",
    AttributeProductSchema
);
