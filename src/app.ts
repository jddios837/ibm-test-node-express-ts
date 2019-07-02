import * as express from "express";
import * as bodyParser from "body-parser";

import * as mongoose from "mongoose";

// ROUTES
import { MainRoutes } from "./routes/mainRoutes";
import { AuthRoutes } from "./routes/authRoutes";
import { UserRoutes } from "./routes/userRoutes";
import { LogRoutes } from "./routes/logRoutes";

class App {

	public app: express.Application;
	public mainRoute: MainRoutes = new MainRoutes();
	public authRoute: AuthRoutes = new AuthRoutes();
    public userRoute: UserRoutes = new UserRoutes();
    public logRoute: LogRoutes = new LogRoutes();
    
    public mongoUrl: string = 'mongodb://localhost/ibmTest';

    constructor() {
        this.app = express();
		this.config();
		// this.mainRoute.routes(this.app);         
		this.authRoute.routes(this.app);         
        this.userRoute.routes(this.app);   
        this.logRoute.routes(this.app);   
        
        this.mongoSetup();
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        //config http headers
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        
            next();
        })
    }

}

export default new App().app;