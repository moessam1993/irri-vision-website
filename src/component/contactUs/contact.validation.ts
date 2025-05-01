import Joi from "joi";

export const validateContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  project: Joi.string().required(),
  message: Joi.string().optional(),
});
