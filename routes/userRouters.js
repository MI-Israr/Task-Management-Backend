import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import {
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", protect, getUsers);
router.get("/:id", protect, getUserById);

export default router;
