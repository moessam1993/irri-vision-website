import express from "express";
import { createMessage, getAllMessage } from "./contact.controller";
import { validateBody } from "../../common/middleware/validateRequest";
import { validateContact } from "./contact.validation";

const router = express.Router();

router.post("/contact", createMessage);
router.get("/contact", getAllMessage);

export { router as contactRouter };
