import { voteCollection,pollCollection,choiceCollection } from "../database/db";

export async function voteValidation(req,res,next){
const {_id,choiceId} = req.params
const newChoice = choiceCollection.find(choiceId)
if(!newChoice){
    return res.sendStatus(404);
}

const {expireAt} = pollCollection.find(_id)
const date = dayjs(expireAt)
const now = dayjs(new Date().format("DD/MM/YYYY HH:mm:"))
if(now.isAfter(date)=== true){
  return res.sendStatus(403)  
}
 next();   
}

