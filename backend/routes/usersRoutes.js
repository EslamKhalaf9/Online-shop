import express from "express";
import {
  postLogin,
  postSignup,
  getProfile,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

//post req to /api/user/login
router.post("/login", postLogin);

// POST req to /api/user/signup
router.post("/signup", postSignup);

// POST req to /api/user/signup
router.get("/profile", protect, getProfile);

export default router;
