import dayjs from "dayjs";
import { pollCollection } from "../database/db.js";
import { pollSchema } from "../models/pollSchema.js";

export async function pollSchemaValidation(req, res, next) {
  const { title, expiredAt } = req.body;
  const { error } = pollSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  if (title === undefined) {
    return res.sendStatus(422);
  }

  if (expiredAt === undefined) {
    expiredAt = dayjs(new Date().add(30, "day").format("YYYY/MM/DD HH:mm:"));
  }

  res.locals.poll = poll;
  next();
}
