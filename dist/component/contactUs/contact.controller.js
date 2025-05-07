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
exports.getAllMessage = exports.createMessage = void 0;
const contact_model_1 = require("./contact.model");
const validateInput_1 = require("../../common/utils/validateInput");
const contact_service_1 = require("./contact.service");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        if (Buffer.isBuffer(body)) {
            try {
                body = JSON.parse(body.toString());
            }
            catch (_a) {
                return res.status(400).json({ message: "Invalid JSON body" });
            }
        }
        const { name, email, project, phoneNumber, message } = body;
        const validationErrors = (0, validateInput_1.validateContactInput)({
            name,
            email,
            project,
            phoneNumber,
        });
        if (validationErrors.length) {
            return res.status(400).json({ message: validationErrors });
        }
        yield contact_model_1.Contact.create({ name, email, project, phoneNumber, message });
        // await sendSalesEmail({ name, email, project, phoneNumber, message });
        // await sendCustomerEmail({ name, email, project, message });
        yield Promise.all([
            (0, contact_service_1.sendCustomerEmail)({ name, email, project, message }),
            (0, contact_service_1.sendSalesEmail)({ name, email, project, phoneNumber, message }),
        ]);
        //   let body = req.body;
        //   if (Buffer.isBuffer(body)) {
        //     try {
        //       body = JSON.parse(body.toString());
        //       console.log(body);
        //     } catch (e) {
        //       return res.status(400).json({ message: "Invalid JSON body" });
        //     }
        //   }
        //   const { name, email, project, phoneNumber, message } = body;
        //   if (!name || !email || !project || !phoneNumber) {
        //     return res.status(400).json({
        //       message: [
        //         '"name" is required',
        //         '"email" is required',
        //         '"project" is required',
        //       ],
        //     });
        //   }
        //   await Contact.create({ name, email, project, phoneNumber, message });
        //   const customerMsg = {
        //     to: email,
        //     subject: `Thanks for contacting us, ${name}`,
        //     text: `Hi ${name},\n\nThanks for reaching out about "${project}".\n\nYour message:\n"${message}"\n\nWe'll get back to you soon!\n\nBest,\nYour Company`,
        //     html: `
        //       <p>Hi <strong>${name}</strong>,</p>
        //       <p>Thanks for reaching out about <strong>${project}</strong>.</p>
        //       <p>Your message:</p>
        //       <blockquote>${message}</blockquote>
        //       <p>We'll get back to you soon!</p>
        //       <p>— irri vision</p>
        //     `,
        //   };
        //   await sendEmail(customerMsg);
        //   const salesMsg = {
        //     to: "ygamalhosny@gmail.com",
        //     subject: "🚀 New Lead: Customer Contacted",
        //     text: `New contact from customer:\n\nName: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nProject: ${project}\nMessage: ${message}`,
        //     html: `
        //   <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        //     <h2 style="color: #007BFF;">📩 New Customer Contact</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Project:</strong> ${project}</p>
        //     <p><strong>Message:</strong></p>
        //     <p style="background-color: #f4f4f4; padding: 10px; border-left: 4px solid #007BFF;">
        //       ${message}
        //     </p>
        //     <hr style="margin-top: 30px;" />
        //     <footer style="font-size: 12px; color: #888;">This is an automated email from your contact form.</footer>
        //   </div>
        // `,
        //   };
        //   await sendEmail(salesMsg);
        res.status(201).json({ message: "Message sent successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});
exports.createMessage = createMessage;
const getAllMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield contact_model_1.Contact.find({});
        res.status(201).json({ data: messages });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});
exports.getAllMessage = getAllMessage;
