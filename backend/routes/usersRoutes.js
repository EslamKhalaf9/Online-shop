import express from 'express';
import {
  postLogin,
  postSignup,
  getProfile,
  putUpdate,
} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

//post req to /api/user/login
router.post('/login', postLogin);

// POST req to /api/user/signup
router.post('/signup', postSignup);

// POST req to /api/user/profile
router.get('/profile', protect, getProfile);

// PUT req to /api/user/update
router.put('/update', protect, putUpdate);

export default router;
