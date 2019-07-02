import { LogController } from "../controllers/logController";

export class LogRoutes {  
	public logController: LogController = new LogController();

	public routes(app): void {          
		// Get all users
		app.route('/log')
				.get(this.logController.getLogs)          
    }
}