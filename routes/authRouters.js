import express from express;
import * as authController from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", authController.loginUser);
authRouter.post("/register", authController.registerUser);
authRouter.get("/profile", protect, authController.getUserProfile);
authRouter.put("/profile", protect, authController.updateUserProfile);

export default authRouter;