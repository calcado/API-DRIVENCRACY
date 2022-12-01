import {Router} from "express";

const choiceRouter = Router();

choiceRouter.post("/choice",choiceSchemaValidation,postChoice);
choiceRouter.get("/poll/:id/choice", getChoice);

export default choiceRouter;