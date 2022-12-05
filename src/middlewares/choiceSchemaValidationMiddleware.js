import {choiceSchema} from "../models/choiceSchema.js"
import { pollCollection, choiceCollection } from "../database/db.js";
import dayjs from "dayjs";


export async function choiceSchemaValidation (req,res,next){
 const {title, pollId} = req.body
 const choice = {title, pollId}

 const {error} = choiceSchema.validate(choice, {abortEarly:false});
if(error){
    const errors = error.details.map((detail)=>detail.message);
    res.status(422).send(errors)
}


req.body = choice
 next();   
}

