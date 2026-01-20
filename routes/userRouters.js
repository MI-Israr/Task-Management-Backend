import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { getUserById, getUsers } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.get("/", protect, adminOnly, getUsers);
UserRouter.get("/:id", protect, getUserById);

export default UserRouter;
