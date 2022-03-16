const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = await ProfileService.insert({
    username: 'Test User',
    quote: 'N/A',
  });
  res.json(profile);
});
