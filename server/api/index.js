import express from 'express';
import weather from './weather.js';
import auth from './auth.js';

const router = express.Router();

router.use('/weather', weather);
router.use('/auth', auth);

export default router;
