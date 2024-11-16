import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IReviewProduct } from "type";
import { EStatusReview } from "../types";

const ReviewSchema = new Schema<IReviewProduct>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product",
            index: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        content: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusReview).filter(
                (value) => typeof value === "number"
            ),
        },
        likedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
        dislikedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    configSchema
);

export default model<IReviewProduct>("reviewProduct", ReviewSchema);
