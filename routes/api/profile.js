const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { request } = require('express');

router.get('/me', auth, async (req, res) => {
try {
    const profiles = await profiles.findOne({ user: request.user.id}).populate('user', ['name', 'avatar']);

    if(!profile) {
        return res.status(400).json({msg: 'There is no profile for this user'})
    }
    res.json(profile);
} catch(err) {
    console.err(err.message);
    res.status(500).send('Server Error')
    }
});


module.exports = router;