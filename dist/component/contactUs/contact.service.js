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
exports.sendSalesEmail = exports.sendCustomerEmail = void 0;
const sendMail_1 = require("../../common/utils/sendMail");
const sendCustomerEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, project, message }) {
    const msg = {
        to: email,
        subject: `Thanks for contacting us, ${name}`,
        text: `Hi ${name},\n\nThanks for reaching out about "${project}".\n\nYour message:\n"${message}"\n\nWe'll get back to you soon!\n\nBest,\nIrri Vision`,
        html: `
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thanks for reaching out about <strong>${project}</strong>.</p>
      <p>Your message:</p>
      <blockquote>${message}</blockquote>
      <p>We'll get back to you soon!</p>
      <p>— Irri Vision</p>
    `,
    };
    yield (0, sendMail_1.sendEmail)(msg);
});
exports.sendCustomerEmail = sendCustomerEmail;
const sendSalesEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, project, phoneNumber, message }) {
    const msg = {
        to: "support@irri-vision.com",
        subject: "🚀 New Lead: Customer Contacted",
        text: `New contact from customer:\n\nName: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nProject: ${project}\nMessage: ${message}`,
        html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #007BFF;">📩 New Customer Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong> ${project}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f4f4f4; padding: 10px; border-left: 4px solid #007BFF;">
          ${message}
        </p>
        <hr style="margin-top: 30px;" />
        <footer style="font-size: 12px; color: #888;">
          This is an automated email from your contact form.
        </footer>
      </div>
    `,
    };
    yield (0, sendMail_1.sendEmail)(msg);
});
exports.sendSalesEmail = sendSalesEmail;
