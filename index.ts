require("dotenv").config();
import express from "express";
import routerClient from "./routes/client/index.route";
import routerAdmin from "./routes/admin/index.route";
import * as database from "./config/database.config";
database.connect();
const app = express();
const port = 3000;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

routerClient(app);
routerAdmin(app);

app.locals.admin = process.env.ADMIN;

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
	console.log(`Đang lắng nghe cổng ${port}`);
});
