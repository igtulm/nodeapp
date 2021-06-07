import express from 'express';
import { create } from '../controllers/users';

const router = express.Router();

/* create user */
router.post('/', create);

export default router;
