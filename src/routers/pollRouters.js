import {Router} from "express";
import {postPoll, getPoll} from "../controllers/pollController.js"
import { pollSchemaValidation } from "../middlewares/pollSchemaValidationMiddleware.js";


const pollRouter = Router();

pollRouter.post("/poll", pollSchemaValidation,postPoll);
pollRouter.get("/poll", getPoll);

export default pollRouter;