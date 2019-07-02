
import {Request, Response} from "express";
import { AuthController } from "../controllers/authController";

export class AuthRoutes {   
	public authController: AuthController = new AuthController();

	public routes(app): void {          
        app.route('/auth')
   			.get(this.authController.getToken);              
	}
}
