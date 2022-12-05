import {Router} from "express";
import { postChoice,getChoice } from "../controllers/choiceController.js";
import { choiceSchemaValidation} from "../middlewares/choiceSchemaValidationMiddleware.js";
import {choiceValidation} from "../middlewares/choiceValidationMiddleware.js"
import { getChoiceValidation } from "../middlewares/getChoiceValidationMiddleware.js";
import { pollValidation } from "../middlewares/pollValidationMiddleware.js";
const choiceRouter = Router();

choiceRouter.post("/choice",choiceSchemaValidation,pollValidation,choiceValidation,postChoice);
choiceRouter.get("/poll/:id/choice", getChoiceValidation,getChoice);

export default choiceRouter;