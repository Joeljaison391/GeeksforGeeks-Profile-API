const express = require('express');
const { getProfile, getDSACard } = require('../controllers/profileController');
const { profileRateLimiter } = require('../utils/rateLimiter');
const router = express.Router();

router.get('/profile/:username', profileRateLimiter, getProfile);
// router.get('/profile/:username/dsa-card', profileRateLimiter, getDSACard);

module.exports = router;
