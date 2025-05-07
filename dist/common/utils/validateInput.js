"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContactInput = void 0;
const validateContactInput = (input) => {
    const errors = [];
    if (!input.name)
        errors.push('"name" is required');
    if (!input.email)
        errors.push('"email" is required');
    if (!input.project)
        errors.push('"project" is required');
    if (!input.phoneNumber)
        errors.push('"phoneNumber" is required');
    return errors;
};
exports.validateContactInput = validateContactInput;
