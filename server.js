require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware 
app.use(cors({
  origin: [ process.env.FRONTEND_URL],
  credentials: true,
}));
app.use(express.json());

// ── MongoDB Connection 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// ── Routes 
app.use('/api/scores',  require('./routes/scores'));
app.use('/api/auth',    require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({ message: '🎮 AeroPuzzle API is running!', status: 'OK' });
});

// ── Start Server 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
