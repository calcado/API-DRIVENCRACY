import {Router} from "express";
import { postVote, getResult } from "../controllers/voteController";
import { voteValidation } from "../middlewares/voteValidation";

const voteRouter = Router();

voteRouter.post("/choice/:id/vote", voteValidation, postVote);
voteRouter.get("/choice/:id/vote", getResult);


export default voteRouter