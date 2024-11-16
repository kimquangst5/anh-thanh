import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { EStatusHistoryOrder, EStatusOrder } from "../types";
import { IOrder } from "type";

const OrderSchema = new Schema<IOrder>(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            index: true,
        },
        attributeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "attributeProduct",
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        priceAtPurchase: {
            type: Number,
            required: true,
        },
        totalRefund: {
            type: Number,
            required: true,
        },
        timeRefund: {
            type: Date,
            required: true,
        },
        totalRefundToken: {
            type: Number,
            required: true,
        },
        warranty: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusOrder).filter(
                (value) => typeof value === "number"
            ),
        },
        requiredComplete: {
            type: Date,
        },
    },
    configSchema
);

OrderSchema.pre("save", function (next) {
    if (!this.orderCode) {
        this.orderCode = Math.floor(1000 + Math.random() * 9000).toString();
    }
    next();
});

export default model<IOrder>("order", OrderSchema);
