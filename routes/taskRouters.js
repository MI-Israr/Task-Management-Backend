import express from "express";

import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import {
  createTask,
  deleteTask,
  getDashboardData,
  getTaskById,
  getTasks,
  getUserDashboardData,
  updateTask,
  updateTaskChecklist,
  updateTaskStatus,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/dashboard-data", protect, getDashboardData);
taskRouter.get("/user-dashboard-data", protect, getUserDashboardData);
taskRouter.get("/", protect, getTasks);
taskRouter.get("/:id", protect, getTaskById);
taskRouter.post("/", protect, adminOnly, createTask);
taskRouter.put("/:id", protect, updateTask);
taskRouter.delete("/:id", protect, adminOnly, deleteTask);
taskRouter.put("/:id/status", protect, updateTaskStatus);
taskRouter.put("/:id/todo", protect, updateTaskChecklist);

export default taskRouter;
