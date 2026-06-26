const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,          // null = guest player
  },
  playerName: { type: String, required: true, default: 'Guest' },
  timeTaken:  { type: Number, required: true },   // seconds
  moves:      { type: Number, required: true },   // swap count
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  gridSize:   { type: Number, default: 3 },       // 3 = 3×3
  completed:  { type: Boolean, default: true },
  createdAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model('Score', ScoreSchema);
