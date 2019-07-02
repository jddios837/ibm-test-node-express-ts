"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    userDocument: {
        type: String,
        required: 'Ingresa el numero de documento'
    },
    userName: {
        type: String,
        required: 'Ingresa el nombre'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=userModel.js.map