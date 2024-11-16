import mongoose, { Schema, model } from "mongoose";
import { IProductOverview } from "type";

const ProductOverviewSchema = new Schema<IProductOverview>({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product",
        index: true,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    rating_1: {
        type: Number,
        default: 0,
    },
    rating_2: {
        type: Number,
        default: 0,
    },
    rating_3: {
        type: Number,
        default: 0,
    },
    rating_4: {
        type: Number,
        default: 0,
    },
    rating_5: {
        type: Number,
        default: 0,
    },
    averageRating: {
        type: Number,
        default: 0,
    },
    sold: {
        type: Number,
        default: 0,
    },
    soldQuantity: {
        type: Number,
        default: 0,
    },
});

export default model<IProductOverview>(
    "productOverview",
    ProductOverviewSchema
);
