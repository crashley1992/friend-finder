const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const friendsData = require('../data/friends');

router.get('/friends', (req, res) => {
    res.json(friendsData);
});


module.exports = router;