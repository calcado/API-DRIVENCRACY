import { choiceCollection, pollCollection, voteCollection } from "../database/db.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb";

export async function postVote(req, res) {
  const {id} = req.params;
  console.log(id)
  try {
    await voteCollection.insertOne({
       
        createdAt:dayjs().format("DD/MM/YYYY HH:mm"),
        choiceId:id
    })
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
  }
}

export async function getResult(req,res){
    const id = req.params;
   console.log(id)
   try{
   const chosenPoll = await pollCollection.findOne({_id:ObjectId(id)});
   console.log(chosenPoll)
  //  const choices = await choiceCollection.find()
  //  console.log(choices)
   
    console.log("trabalhando")
    res.sendStatus(200)

   }catch(err){
    console.log(err)
} 
}
