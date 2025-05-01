import { Request, Response } from "express";
import { Contact } from "./contact.model";

export const createMessage = async (req: Request, res: Response) => {
  try {
    
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllMessage = async (req: Request, res: Response) => {
  try {
    const messages = await Contact.find({});
    res.status(201).json({ data: messages });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
