"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const logModel_1 = require("../models/logModel");
const User = mongoose.model('User', userModel_1.UserSchema);
const Log = mongoose.model('Log', logModel_1.LogSchema);
class UserController {
    addNewUser(req, res) {
        let newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                let logInfo = new Log({
                    request: JSON.stringify(req.body),
                    type: 'Error Save User',
                    response: "¡DATOS INCORRECTOS!"
                });
                logInfo.save((e, u) => {
                    console.log('Save Log e', e);
                    console.log('Save Log u', u);
                });
                res.status(404).send({ msg: "¡DATOS INCORRECTOS!" });
            }
            else {
                let logInfo = new Log({
                    request: JSON.stringify(req.body),
                    type: 'Saved user OK',
                    response: "¡DATOS RECIBIDOS!"
                });
                logInfo.save();
                res.status(200).send({ msg: "¡DATOS RECIBIDOS!" });
            }
        });
    }
    getUsers(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map