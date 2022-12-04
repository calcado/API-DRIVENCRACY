import {Router} from "express";
import { postChoice,getChoice } from "../controllers/choiceController";
import { choiceSchemaValidation,getChoiceValidation } from "../middlewares/choiceSchemaValidation";
const choiceRouter = Router();

choiceRouter.post("/choice",choiceSchemaValidation,postChoice);
choiceRouter.get("/poll/:id/choice", getChoiceValidation,getChoice);

export default choiceRouter;