const express = require('express');
const cors = require('cors');
const path = require('path');
const { errorHandler } = require('./middleware/error');

// Load environment variables using absolute path
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Note: Supabase is initialized in its own config file and imported where needed.

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Custom Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running with Supabase' });
});

// Error Handler
app.use(errorHandler);

// Start server only when run directly (not as a serverless function)
if (require.main === module) {
  const PORT = process.env.PORT || 5005;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

module.exports = app;
