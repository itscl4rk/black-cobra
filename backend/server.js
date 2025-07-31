import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
// routes
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.clear();
  connectDB();
  console.log("Server is running on http://localhost:" + PORT);
});
