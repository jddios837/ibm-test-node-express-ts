import { UserController } from "../controllers/userController";

export class UserRoutes {  
	public userController: UserController = new UserController();

	public routes(app): void {          
        app.route('/user')
			   .post(this.userController.addNewUser);   
		// Get all users
		app.route('/user')
				.get(this.userController.getUsers)          
    }
}