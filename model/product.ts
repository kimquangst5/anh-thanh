import mongoose, { Schema, model } from "mongoose";
// import { configSchema } from "../configs/modules";
// import { IProduct } from "type";
// import { EStatusAttribute } from "../types";

const ProductSchema = new Schema(
	{
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "category",
		},
		sellerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
		name: {
			type: String,
			required: true,
		},
		introduction: {
			type: String,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: [String],
			required: true,
		},
		warranty: {
			type: Number,
			required: true,
		},
		status: {
			type: Number,
			// enum: Object.values(EStatusAttribute).filter(
			// 	(value) => typeof value === "number"
			// ),
		},
		averageRating: {
			type: Number,
			default: 0,
		},
	}
	// configSchema
);

const Product = model("Product", ProductSchema, "products");

export default Product;
