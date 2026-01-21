import express from "express";
import authRouter from "./authRouters.js";
import userRouter from "./userRouters.js";
import taskRouter from "./taskRouters.js";
import reportRouter from "./reportRouters.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/tasks", taskRouter);
router.use("/report", reportRouter);

export default router;
