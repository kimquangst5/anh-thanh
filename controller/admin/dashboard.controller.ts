import express, { Request, Response } from "express";
import Product from "../../model/product";
import Category from "../../model/category";
import Seller from "../../model/infoSeller";
export const index = async (req: Request, res: Response) => {
	const products = await Product.find({});
	const newProduct = [];

	for await (const it of products) {
		const category = await Category.findOne({
			_id: it.categoryId,
		});
		const sellers = await Seller.findOne({
			userId: it.sellerId,
		});
		newProduct.push({
			id: it.id,
			category: category.name,
			seller: sellers.nameStore,
			name: it.name,
			introduction: it.introduction,
			description: it.description,
			image: it.image,
			warranty: it.warranty,
			status: it.status,
			averageRating: it.averageRating,
		});
	}
	// res.json({
	// 	totalProduct: newProduct.length,
	// 	newProduct: newProduct,
	// });
	res.render("admin/pages/dashboard/index.pug", {
		pageTitle: "Tổng quan",
	});
};
