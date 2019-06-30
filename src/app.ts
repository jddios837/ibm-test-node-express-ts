import * as express from "express";
import * as bodyParser from "body-parser";

// ROUTES
import { MainRoutes } from "./routes/mainRoutes";

class App {

	public app: express.Application;
	public mainRoute: MainRoutes = new MainRoutes();

    constructor() {
        this.app = express();
		this.config();
		this.mainRoute.routes(this.app);         
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;