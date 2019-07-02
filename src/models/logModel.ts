import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LogSchema = new Schema({
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