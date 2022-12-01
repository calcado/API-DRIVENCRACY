import {Router} from "express";

const pollRouter = Router();

pollRouter.post("/poll", pollSchemaValidation,postPoll);
pollRouter.get("/poll", getPoll);

export default pollRouter 