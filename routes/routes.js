// User Model
// import User from '../models/User';

const User = require('../models/User');
module.exports = (app) => {

    app.get('/users', async (req, res) => {
        try {
            const users = await User.find();
            if (!users) throw Error('No users exist');
                res.json(users);
            } catch (e) {
                res.status(400).json({ msg: e.message });
        }
    });

};

