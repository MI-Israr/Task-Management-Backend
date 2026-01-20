import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import {
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.get("/", protect, adminOnly, getUsers);
UserRouter.get("/:id", protect, getUserById);
UserRouter.delete("/:id", protect, adminOnly, deleteUser);

export default UserRouter;
