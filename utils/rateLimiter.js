const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

const profileRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 10, 
  message: 'Too many profile requests from this IP, please try again after an hour',
});

module.exports = { rateLimiter, profileRateLimiter };
