import Message from "../models/Message.js";

// POST /api/contact
export const createMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
};

// GET /api/messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// DELETE /api/messages/:id
export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Delete failed" });
  }
};