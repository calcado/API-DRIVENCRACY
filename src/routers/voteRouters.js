import {Router} from "express";

const voteRouter = Router();

voteRouter.post("/choice/:id/vote", voteSchemaValidation, postChoice);
voteRouter.get("/choice/:id/vote", getResult);


export default voteRouter