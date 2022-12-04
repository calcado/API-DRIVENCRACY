import {Router} from "express";
import { postChoice,getChoice } from "../controllers/choiceController.js";
import { choiceSchemaValidation,getChoiceValidation } from "../middlewares/choiceSchemaValidation.js";

const choiceRouter = Router();

choiceRouter.post("/choice",choiceSchemaValidation,postChoice);
choiceRouter.get("/poll/:id/choice", getChoiceValidation,getChoice);

export default choiceRouter;