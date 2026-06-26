const express  = require('express');
const Score    = require('../models/Score');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/scores  — leaderboard (top 20 by time)
router.get('/', async (req, res) => {
  try {
    const { difficulty, limit = 20 } = req.query;
    const filter = difficulty ? { difficulty } : {};
    const scores = await Score.find(filter)
      .sort({ timeTaken: 1 })
      .limit(Number(limit))
      .populate('user', 'username');
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/scores  — save a new score (guest or logged-in)
router.post('/', async (req, res) => {
  try {
    const { playerName, timeTaken, moves, difficulty, gridSize } = req.body;
    // Check for JWT optionally
    let userId = null;
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const jwt  = require('jsonwebtoken');
        const data = jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET);
        userId = data.id;
      } catch { /* guest */ }
    }

    const score = await Score.create({
      user: userId, playerName, timeTaken, moves, difficulty, gridSize,
    });
    res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/scores/my  — logged-in user's scores
router.get('/my', protect, async (req, res) => {
  try {
    const scores = await Score.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
