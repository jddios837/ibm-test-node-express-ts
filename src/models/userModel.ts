import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
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