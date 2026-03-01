import express from "express";
import {
  createMessage,
  getMessages,
  deleteMessage
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/contact", createMessage);
router.get("/messages", getMessages);
router.delete("/messages/:id", deleteMessage);

export default router;