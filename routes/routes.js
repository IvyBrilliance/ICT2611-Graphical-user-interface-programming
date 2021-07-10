

/* at some point i need to return this conde back into the models User.js file... 
I placed it here temporarily to solve the issue for now,....*/


var mongoose = require('mongoose');
let Schema = mongoose.Schema;
// let model = mongoose.model;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model('users', UserSchema);



// const User = require('../models/User');
module.exports = (app) => {

    app.get('/users',  async(req, res, next) => {
    	console.log("accessed");
        try {
          	User.find()
          		.then(function(err, doc){
          			res.send(doc);
          		})

            if (!users) throw Error('No users exist');
            res.json(users);
        } catch (e) {
            res.status(400).json({ msg: e.message });
        }
    });

    app.post('/createuser', async (req, res, next) => {
    	console.log("accessed create user route");
        try {
          	// var item = {
          	// 	name: req.body.name,
          	// 	email: req.body.email,
          	// 	password: req.body.password,
          	// 	register_date: Date.now()
          	// }
          	let testItem = {
          		name: "daniel",
          		email: "danielromeo99@gmail.com",
          		password: "password",
          		register_date: Date.now()	
          	}

          	let data = new User(testItem);
          	data.save();
          	res.send("successfully added a new user to the database");
        } catch (e) {
            res.status(400).json({ msg: e.message });
        }
    });

    // app.get('/posts', async (req, res) => {
    // 	console.log("accessed");
    //     try {
    //         const users = await User.find();
    //         if (!users) throw Error('No posts exist');
    //             res.json(users);
    //         } catch (e) {
    //             res.status(400).json({ msg: e.message });
    //     }
    // });

};

