import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import path from "path";

import { connectDB } from "../config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import notesRoute from "./routes/notes.route.js";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

// middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is ruuning on PORT : 5000");
  });
});
