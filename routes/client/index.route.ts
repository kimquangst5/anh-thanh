require("dotenv").config();
import home from "./home.route";
export default (app) => {
	app.use("/", home);
};
