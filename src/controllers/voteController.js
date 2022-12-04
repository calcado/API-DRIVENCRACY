import { voteCollection } from "../database/db";
import dayjs from "dayjs";

export async function postVote(req, res) {
  const { _id, choiceId } = req.params;
  try {
    await voteCollection.insertOnte({
        _id,
        createdAt:dayjs(new Date().format("DD/MM/YYYY HH:mm:")),
        choiceId
    })
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
  }
}

export async function getResult(req,res){
    const {pollId} = req.params

   try{

   }catch(err){
    console.log(err)
} 
}
