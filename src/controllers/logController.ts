
import * as mongoose from 'mongoose';
import { LogSchema } from '../models/logModel';
import { Request, Response } from 'express';

const Log = mongoose.model('Log', LogSchema);

export class LogController{

	
	public getLogs (req: Request, res: Response) {           
        Log.find({}, (err, log) => {
            if(err){
                res.send(err);
            }
            res.json(log);
        });
    }
}