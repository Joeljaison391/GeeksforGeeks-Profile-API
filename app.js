const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
const { rateLimiter } = require('./utils/rateLimiter');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Apply general rate limiting middleware
app.use(rateLimiter);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use profile routes
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
