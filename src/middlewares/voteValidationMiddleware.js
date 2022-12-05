import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import { pollCollection, choiceCollection } from "../database/db.js";

export async function voteValidation (req,res,next){
const {id} = req.params 
console.log(id)
try{
  const existChoice = await choiceCollection.findOne({_id:ObjectId(id)})
  console.log(existChoice)
  if(!existChoice){
    return res.sendStatus(404)
   }
 const {pollId} = existChoice
 const existPoll = await pollCollection.findOne({_id:ObjectId(pollId)})
 const {expiredAt} = existPoll
 console.log(expiredAt)

 if(dayjs().isAfter(dayjs(expiredAt))){
  return res.sendStatus(403)
 }

}catch(err){console.log(err)}


  next();
}

