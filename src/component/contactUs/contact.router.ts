import express from 'express';
import { createMessage, getAllMessage } from './contact.controller';

const router = express.Router();

router.post('/contact', createMessage);
router.get('/contact', getAllMessage);


export {router as contactRouter};
