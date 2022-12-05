import { ObjectId } from "mongodb";
import { pollCollection } from "../database/db.js";

export async function votePollValidation(req, res, next) {
  const  {id}  = req.params;
  
  try {
    const existPoll = await pollCollection.findOne({ _id: ObjectId(id) });
    
    if (!existPoll) {
      return res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
  }

  next();
}
