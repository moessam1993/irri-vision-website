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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
// Set the SendGrid API Key
mail_1.default.setApiKey('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');
const sendEmail = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { to, subject, text, html } = payload;
    const msg = {
        from: 'info@irri-vision.com',
        to,
        subject,
        text,
        html,
    };
    try {
        yield mail_1.default.send(msg);
        console.log(`Email sent successfully to ${to}`);
    }
    catch (error) {
        console.error('Error sending email:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.body) || error.message);
        throw new Error('Failed to send email');
    }
});
exports.sendEmail = sendEmail;
