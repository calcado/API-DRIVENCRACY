import { choiceCollection } from "../database/db"

export async function postChoice(req, res) {
  const { titleChoice, pollIdChoice } = req.body;
  try {
    await choiceCollection.insertOne({
      title: titleChoice,
      pollId: pollIdChoice,
    });
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
  }
}

export async function getChoice(req,res){
const {_id,pollId} = req.params

    try{
        const choices = await choiceCollection.find(pollId).toArray();
        res.send(choices)
    }catch(err){console.log(err)}
}