"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const logModel_1 = require("../models/logModel");
const Log = mongoose.model('Log', logModel_1.LogSchema);
class LogController {
    getLogs(req, res) {
        Log.find({}, (err, log) => {
            if (err) {
                res.send(err);
            }
            res.json(log);
        });
    }
}
exports.LogController = LogController;
//# sourceMappingURL=logController.js.map