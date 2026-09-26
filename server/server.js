import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";
import adminRoutes from "./routes/admin.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (
        origin === "https://portfolio-website-vipul.vercel.app" ||
        origin.endsWith(".vercel.app") ||
        origin === "http://localhost:5173" ||
        origin === "http://localhost:3000"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-admin-passkey",
    ],
  })
);

app.options("*", cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error("❌ MongoDB Error:", err));
