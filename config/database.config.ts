import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
export const connect = async () => {
	try {
		const PATH_DATABASE = process.env.PATH_DATABASE;
		await mongoose.connect(PATH_DATABASE);
		console.log("Kết nối database thành công!");
	} catch (error) {
		console.log("Kết nối database thất bại!");
	}
};
