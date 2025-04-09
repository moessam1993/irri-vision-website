import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { contactRouter } from './component/contactUs/contact.router';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactRouter);

export default app;
