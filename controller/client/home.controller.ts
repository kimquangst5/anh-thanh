import express, { Request, Response } from "express";
export const index = (req: Request, res: Response) => {
	res.render("client/pages/home/index.pug", {
		pageTitle: "Trang chủ",
	});
};
