import {Router} from "express";
import { postVote, getResult } from "../controllers/voteController.js";
import { voteValidation } from "../middlewares/voteValidationMiddleware.js";

const voteRouter = Router();

voteRouter.post("/choice/:id/vote",voteValidation, postVote);
voteRouter.get("/poll/:id/result", getResult);

export default voteRouter;
