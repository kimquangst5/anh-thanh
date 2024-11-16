require("dotenv").config();
import dashboard from "./dashboard.route";
export default (app) => {
	const admin = process.env.ADMIN;
	app.use(`/${admin}/dashboard`, dashboard);
};
