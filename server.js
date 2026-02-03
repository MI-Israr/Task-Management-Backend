import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

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
