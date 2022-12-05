import { ObjectId } from "mongodb";
import { choiceCollection} from "../database/db.js";

export async function getChoiceValidation(req,res,next){
    const id = req.params
    if(id.id.length < 24){
        return res.sendStatus(422)
    }

    const validPoll = await choiceCollection.findOne({pollId:ObjectId(id.id)});
    console.log(validPoll)
    
    if(!validPoll){
        return res.sendStatus(404)
    }
    res.locals.id = id
    next();
    }