import { choiceCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function choiceValidation(req, res, next) {
  const { title, pollId } = req.body;

  try {
    const existChoice = await choiceCollection.findOne({
      title,
      pollId: ObjectId(pollId),
    });
    if (existChoice) {
      return res.sendStatus(409);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}
