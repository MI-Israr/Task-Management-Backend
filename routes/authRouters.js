import express from "express";
import * as authController from "../controllers/authController.js";
import upload from "../middlewares/uploadMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", authController.loginUser);
authRouter.post("/register", authController.registerUser);
authRouter.get("/profile", protect, authController.getUserProfile);
authRouter.put("/profile", protect, authController.updateUserProfile);

authRouter.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  // 🟢 NEW (Correct Path)
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

export default authRouter;
