import express from "express";
import * as authController from "../controllers/authController.js";
// import protect from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", authController.loginUser);
authRouter.post("/register", authController.registerUser);
authRouter.get("/profile", authController.getUserProfile);
authRouter.put("/profile", authController.updateUserProfile);

export default authRouter;
