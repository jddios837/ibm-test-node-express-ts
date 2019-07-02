
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { LogSchema } from '../models/logModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
const Log = mongoose.model('Log', LogSchema);

export class UserController{

	public addNewUser (req: Request, res: Response) {   
        console.log('Entro AddNewUSer ', req.body);
                     
        let newUser = new User(req.body);
    
        newUser.save((err, user) => {
            console.log('Save ', err);
            console.log('Save user ', user);
            
            
            if(err){
                let logInfo = new Log({
                    request: JSON.stringify(req.body), 
                    type: 'Error Save User',
                    response: "¡DATOS INCORRECTOS!"});
                logInfo.save((e, u) => {
                    console.log('Save Log e', e);
                    console.log('Save Log u', u);
                });

                res.status(404).send({msg: "¡DATOS INCORRECTOS!"});
            } else {
                let logInfo = new Log({
                    request: JSON.stringify(req.body), 
                    type: 'Saved user OK',
                    response: "¡DATOS RECIBIDOS!"});
                logInfo.save();
                res.status(200).send({msg: "¡DATOS RECIBIDOS!"});
            }  
        });
	}
	
	public getUsers (req: Request, res: Response) {           
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
}