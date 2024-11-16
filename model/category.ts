import mongoose, { Schema, model } from "mongoose";
// import { configSchema } from "../configs/modules";
// import { ICategory } from "type";

const CategorySchema = new Schema(
	{
		boothTypeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "boothType",
		},
		name: {
			type: String,
			required: true,
		},
		status: {
			type: Number,
			default: 0, //0: true, 1: false
		},
		discount: {
			type: Number,
			required: true,
		},
	}
	// configSchema
);
// export default model<ICategory>("category", CategorySchema);

const Category = model("Category", CategorySchema, "categories");

export default Category;
