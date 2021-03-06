const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        let users = await User.find();
        res.json(users);
    }
    catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;