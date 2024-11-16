import mongoose, { Schema, model } from "mongoose";
// import { configSchema } from "../configs/modules";
// import { EStatusSeller } from "../types";
// import { IInfoSeller } from "type";

// const InfoSellerSchema = new Schema<IInfoSeller>(
const InfoSellerSchema = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
		nameStore: {
			type: String,
			required: true,
			unique: true,
		},
		logo: {
			type: String,
		},
		description: {
			type: String,
			required: true,
		},
		zalo: {
			type: String,
		},
		telegram: {
			type: String,
		},
		status: {
			type: Number,
			// enum: Object.values(EStatusSeller).filter(
			// 	(value) => typeof value === "number"
			// ),
			required: true,
		},
	}
	// configSchema
);
// export default model<IInfoSeller>("infoSeller", InfoSellerSchema);

const Seller = model("Seller", InfoSellerSchema, "infosellers");

export default Seller;
