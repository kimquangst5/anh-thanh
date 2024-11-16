import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { ICart } from "../type";

const cartSchema = new Schema<ICart>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
        },
        attributeProductId: {
            type: Schema.Types.ObjectId,
            ref: "attributeProduct",
            required: true,
        },
        quantity: {
            type: Number,
        },
        completeDays: {
            type: Number,
        },
        negotiatePrice: {
            type: Number,
        },
    },
    configSchema
);

export default model<ICart>("carts", cartSchema);
