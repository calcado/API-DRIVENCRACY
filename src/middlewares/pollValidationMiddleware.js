import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import { pollCollection } from "../database/db.js";

export async function pollValidation (req,res,next){
const {pollId} = req.body 
console.log(pollId)
try{
  const existPoll = await pollCollection.findOne({_id:ObjectId(pollId)})
  console.log(existPoll)
  if(!existPoll){
    return res.sendStatus(404)
   }
 const {expiredAt} = existPoll
 console.log(expiredAt)

 if(dayjs().isAfter(dayjs(expiredAt))){
  return res.sendStatus(403)
 }

}catch(err){console.log(err)}


  next();
}

