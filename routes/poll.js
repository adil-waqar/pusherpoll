const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '580500',
  key: '4ca5d348a99dff6ed6f5',
  secret: 'e3db6c4b13dcc600790c',
  cluster: 'ap2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('Poll');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });
  return res.json({success: true, message: 'Thank you for voting!'});
});

module.exports = router;
