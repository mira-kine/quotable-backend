const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const profile = { id: '1', name: 'Test User', quote: 'N/A' };
    res.json(profile);
  } catch (error) {
    return null;
  }
});
