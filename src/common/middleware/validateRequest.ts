import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi'

/**
 * validateRequest.ts
 *
 * This module exports a middleware function that uses the express-validator
 * library to validate the request. If there are validation errors, it creates
 * an AppError instance with a 400 status code and passes it to the next
 * middleware. If there are no errors, it passes the request to the next
 * middleware in the stack.
 *
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function
 */

export const validateBody = (schema: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the request body
    await schema.validateAsync(req.body, { abortEarly: false });
    next(); // Proceed to next middleware or route handler
  } catch (err: any) {
    // Send back validation errors
    return res.status(400).json({
      message: err.details.map((detail: any) => detail.message), // Send error messages in an array
    });
  }
};

export const validateParams = (schema: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the request body
    await schema.validateAsync(req.params, { abortEarly: false });
    next(); // Proceed to next middleware or route handler
  } catch (err: any) {
    // Send back validation errors
    return res.status(400).json({
      message: err.details.map((detail: any) => detail.message), // Send error messages in an array
    });
  }
};
// export const validateAppointmentId = (req: Request, res: Response, next: NextFunction) => {
//   const { error } = validateAppointmentIdSchema.validate(req.params);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   next();
// };
