"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logController_1 = require("../controllers/logController");
class LogRoutes {
    constructor() {
        this.logController = new logController_1.LogController();
    }
    routes(app) {
        // Get all users
        app.route('/log')
            .get(this.logController.getLogs);
    }
}
exports.LogRoutes = LogRoutes;
//# sourceMappingURL=logRoutes.js.map