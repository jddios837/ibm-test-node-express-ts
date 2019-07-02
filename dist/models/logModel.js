"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.LogSchema = new Schema({
    request: {
        type: String
    },
    response: {
        type: String
    },
    type: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=logModel.js.map