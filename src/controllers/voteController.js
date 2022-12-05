import {
  choiceCollection,
  pollCollection,
  voteCollection,
} from "../database/db.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb";

export async function postVote(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    await voteCollection.insertOne({
      createdAt: dayjs().format("DD/MM/YYYY HH:mm"),
      choiceId: ObjectId(id),
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

export async function getResult(req, res) {
  const { id } = req.params;

  try {
    const chosenPoll = await pollCollection.findOne({ _id: ObjectId(id) });

    const choices = await choiceCollection
      .find({ pollId: ObjectId(id) })
      .toArray();
    const idsChoices = choices.map((choice) => choice._id);

    const votes = await voteCollection
      .aggregate([
        { $match: { choiceId: { $in: idsChoices } } },
        { $group: { _id: "$choiceId", total: { $sum: 1 } } },
        { $sort: { total: -1 } },
      ])
      .toArray();

    const mostVoteds = votes.filter((choice) => {
      if (choice.total === votes[0].total) {
        return choice;
      }
    });

    const choiceWinner = [];
    choices.forEach((choice) => {
      mostVoteds.filter((mostVoted) => {
        if (choice._id.equals(mostVoted._id)) {
          choiceWinner.push(choice);
        }
      });
    });

    const titles = choiceWinner.map((winner) => {
      return winner.title;
    });

    const finalResult = {
      _id: chosenPoll._id,
      title: chosenPoll.title,
      expiredAt: chosenPoll.expiredAt,
      result: { title: titles.join() , votes: votes[0].total },
    };

    res.send(finalResult);
  } catch (err) {
    console.log(err);
  }
}
