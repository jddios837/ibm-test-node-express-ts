"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.authController = new authController_1.AuthController();
    }
    routes(app) {
        app.route('/auth')
            .get(this.authController.getToken);
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=authRoutes.js.map