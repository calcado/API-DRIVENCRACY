import joi from "joi";

export const voteSchema = joi.object({
    createdAt:joi.string().required()
})