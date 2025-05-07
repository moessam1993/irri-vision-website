"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
exports.contactRouter = router;
router.post("/contact", contact_controller_1.createMessage);
router.get("/contact", contact_controller_1.getAllMessage);
