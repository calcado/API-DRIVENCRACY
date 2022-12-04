import {choiceSchema} from "../models/choiceSchema"
import { pollCollection, choiceCollection } from "../database/db";
import dayjs from "dayjs";


export async function choiceSchemaValidation (req,res,next){
 const {title, pollId} = req.body
 

 const {error} = choiceSchema.validate(req.body, {abortEarly:false});
if(error){
    const errors = error.details.map((detail)=>detail.message);
    res.sendStatus(422)
}
if(!pollId){
    return res.sendStatus(404)
}
if(title === undefined){
 return res.sendStatus(422)
}
const newChoice = choiceCollection.find(title)
if(newChoice){
 return res.sendStatus(409)
}

const {expireAt} = pollCollection.find(pollId)
const date = dayjs(expireAt)
const now = dayjs(new Date().format("DD/MM/YYYY HH:mm:"))
if(now.isAfter(date)=== true){
  return res.sendStatus(403)  
}
 next();   
}

export async function getChoiceValidation(req,res,next){
const {pollId} = req.params

const validPoll = pollCollection.find(pollId);
if(!validPoll){
    return res.sendStatus(404)
}

next();
}