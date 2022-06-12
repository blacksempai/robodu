const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const User = require('./models/User');
const PORT = config.get('port') || 5000;

const app = express();

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'));
        app.listen(PORT, () => { console.log(`App has been started on port ${PORT}`) });
    }
    catch(e) {
        console.log(e);
    }
}

start();

app.get('/users', async (req, res) => {
    try {
        let users = await User.find();
        res.json(users);
    }
    catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})