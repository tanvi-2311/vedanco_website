const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/error');
require('dotenv').config();

// Note: Supabase is initialized in its own config file and imported where needed.

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running with Supabase' });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
