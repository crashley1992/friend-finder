const path = require('path');
const express = require('express');

//dependency will make sure that express will parse the body regarless of what version or updates with express.
//const bodyParser = require('body-parser');



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//imports htmlRoutes.js
const htmlRoutes = require('./routes/htmlRoutes');

const homeRoute = require('./routes/homeRoute');

const friendRoute = require('./routes/friendsRoute');

//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', htmlRoutes);
app.use('/data', friendRoute);
app.use(homeRoute);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(3000);