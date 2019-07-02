"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/user')
            .post(this.userController.addNewUser);
        // Get all users
        app.route('/user')
            .get(this.userController.getUsers);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=userRoutes.js.map