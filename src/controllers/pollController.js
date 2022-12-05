import { pollCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";
export async function postPoll(req, res) {
  const poll = req.body;

  try {
    await pollCollection.insertOne(poll);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

export async function getPoll(req, res) {
    try {
    const poll = await pollCollection.find().toArray();
    res.send(poll);
  } catch (err) {
    console.log(err);
  }
}
