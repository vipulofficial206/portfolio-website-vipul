import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/verify", (req, res) => {
  
  if (req.body.passkey === process.env.ADMIN_PASSKEY) {
    return res.json({ success: true });
  }

  return res.status(401).json({ error: "Invalid passkey" });
});
export default router;