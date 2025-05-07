import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { contactRouter } from "./component/contactUs/contact.router";
import { connectToMongoDB } from "./config/db";
dotenv.config();

const app = express();
connectToMongoDB();
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", contactRouter);

export default app;
