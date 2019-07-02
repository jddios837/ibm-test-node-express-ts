"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainRoutes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }
}
exports.MainRoutes = MainRoutes;
//# sourceMappingURL=mainRoutes.js.map