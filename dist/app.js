"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// ROUTES
const mainRoutes_1 = require("./routes/mainRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const logRoutes_1 = require("./routes/logRoutes");
class App {
    constructor() {
        this.mainRoute = new mainRoutes_1.MainRoutes();
        this.authRoute = new authRoutes_1.AuthRoutes();
        this.userRoute = new userRoutes_1.UserRoutes();
        this.logRoute = new logRoutes_1.LogRoutes();
        this.mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/ibmTest';
        this.app = express();
        this.config();
        // this.mainRoute.routes(this.app);         
        this.authRoute.routes(this.app);
        this.userRoute.routes(this.app);
        this.logRoute.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    config() {
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
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map