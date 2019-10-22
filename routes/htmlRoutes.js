const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/survey', (req, res) => {
    res.status(200).sendFile(path.join(rootDir, 'views' , 'survey.html'));
});

// router.post('/survey', (req, res) => {
//     console.log('results\n');
//     console.log(req.body);
// })

module.exports = router;