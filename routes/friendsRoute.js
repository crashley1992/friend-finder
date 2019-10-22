const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const friendsData = require('../data/friends');


router.get('/friends', (req, res) => {
    console.log(friendsData);
    res.json(friendsData);
});

router.post('/friends', (req, res) => {
    console.log(req.body);

    //stores user's input
    let userInput = req.body;

    //collects users scores and parses into int
    for (let i = 0; i < userInput.scores.length; i++) {
        userInput.scores[i] = parseInt(userInput.scores[i]);
    }

    //variable for close match with min difference
    let bestMatch = 0;
    let minDiff = 40;

    //for Loop to compare scores
    for (let i = 0; i < friendsData.length; i++) {
        //difference in total
        let totalDiff = 0;

        for (let j = 0; j < friendsData[i].scores.length; j++) {
            //creates var for calulation in total difference
            let difference = Math.abs(userInput.scores[j] - friendsData[i].scores[j]);

            //total diff is the differnce total
            totalDiff += difference;
        }
        if (totalDiff < minDiff) {
            bestMatch = i;
            minDiff = totalDiff;
        }
    };
    res.json(friendsData[bestMatch]);
    console.log(friendsData[bestMatch]);

    friendsData.push(userInput);
});
module.exports = router;

