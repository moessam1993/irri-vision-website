"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateBody = void 0;
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
const validateBody = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request body
        yield schema.validateAsync(req.body, { abortEarly: false });
        next(); // Proceed to next middleware or route handler
    }
    catch (err) {
        // Send back validation errors
        return res.status(400).json({
            message: err.details.map((detail) => detail.message), // Send error messages in an array
        });
    }
});
exports.validateBody = validateBody;
const validateParams = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request body
        yield schema.validateAsync(req.params, { abortEarly: false });
        next(); // Proceed to next middleware or route handler
    }
    catch (err) {
        // Send back validation errors
        return res.status(400).json({
            message: err.details.map((detail) => detail.message), // Send error messages in an array
        });
    }
});
exports.validateParams = validateParams;
// export const validateAppointmentId = (req: Request, res: Response, next: NextFunction) => {
//   const { error } = validateAppointmentIdSchema.validate(req.params);
//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }
//   next();
// };
