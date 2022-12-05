import { choiceCollection } from "../database/db.js"
import { ObjectId } from "mongodb";
export async function postChoice(req, res) {
  const { title, pollId } = req.body;
  
  try {
    await choiceCollection.insertOne({
      title: title,
      pollId: ObjectId(pollId)
    });
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
  }
}

export async function getChoice(req,res){
const {id} = res.locals.id
console.log(res.locals.id)
    try{
        const choices = await choiceCollection.find({pollId:ObjectId(id)}).toArray();
        res.send(choices)
    }catch(err){console.log(err)}
}