const express = require("express")
const Transactions = require("../models/Transactions.js");
const authMiddleware = require("../middleware/auth.js");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  console.log("reached");
  try {
    const { amount, category, description , date, type} = req.body;
    const transaction = new Transactions({
      userId: req.user.id,
      type,
      category,
      amount,
      description,
      date,
    });
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transactions.find({ userId: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Transactions.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

