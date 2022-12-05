import dayjs from "dayjs";
import { pollCollection } from "../database/db.js";
import { pollSchema } from "../models/pollSchema.js";

export async function pollSchemaValidation(req, res, next) {
  const { title, expiredAt } = req.body;
  const poll = {title, expiredAt:!expiredAt ? dayjs().add(30, "day").format("YYYY/MM/DD HH:mm") : expiredAt}
  const { error } = pollSchema.validate(poll, { abortEarly: false });


  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
   
  console.log(poll)
  req.body = poll;
  next();
}
