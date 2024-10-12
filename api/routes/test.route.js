import express from 'express';
import { shouldBeAdmin, shouldBeLoggedIn } from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/VerifyToken.js';


const router = express.Router();

// Add router0
router.get('/should-be-logged-in',verifyToken,shouldBeLoggedIn );
router.get('/should-be-admin', shouldBeAdmin);

export default router;
