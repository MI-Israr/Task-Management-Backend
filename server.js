import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// 2. Reconstruct __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

connectDB();

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
