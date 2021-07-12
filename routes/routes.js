

/* at some point i need to return this conde back into the models User.js file... 
I placed it here temporarily to solve the issue for now,....*/


var mongoose = require('mongoose');
let Schema = mongoose.Schema;
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

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

const Post = mongoose.model('posts', PostSchema);
const User = mongoose.model('users', UserSchema);



// const User = require('../models/User');
module.exports = (app) => {

	// find one user
    app.get('/users',  async(req, res, next) => {
    	console.log("accessed");
        try {
          	User.find({}, function(err, docs) {
			    if (!err) { 
			        console.log(docs);
			        res.send(docs);
			        process.exit();
			    }
			    else {
			        throw err;
			    }
			});

        } catch (e) {
            res.status(400).json({ msg: e.message });
            console.log(e);
        }
    });

    // create a user
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

    // find user by id

    // find all posts

    // find specific post{by params...}
};

