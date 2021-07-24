

/* at some point i need to return this conde back into the models User.js file... 
I placed it here temporarily to solve the issue for now,....*/
const url = require('url');
const querystring = require('querystring');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var slug = require('slug');
var slugify = require('slugify');
/*----------------------------------------------------------------*/



var mongoose = require('mongoose');
let Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
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
  slug: {
    type: String,
     required: true
  },
  img: {
   type: String,
    required: true
  },
  publish_date: {
    type: Date,
    default: Date.now
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

    // login user:
    app.post('/login', async (req, res, next)=>{
        res.send('ok');
    });

    // create a user:
    app.post('/signup', jsonParser, async (req, res, next) => {
    	console.log("accessed create user route");
        try {
          	var item = {
          		firstname: req.body.firstname,
                lastname: req.body.lastname,
          		email: req.body.email,
          		password: req.body.password
          	}

          	let data = new User(item);
          	data.save();
          	res.send("successfully added a new user to the database");
        } catch (e) {
            res.status(400).json({ msg: e.message });
        }
    });


    // find one post
    app.get(`/post/:slug`, async(req, res, next) => {
        Post.findOne({'slug': req.params.slug }, 'slug title body img writer', function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                console.log("Result : ", docs);
                res.send(docs);
            }
        });
    });


    // find all posts
    app.get('/posts',  async(req, res, next) => {
        try {
            Post.find({}, function(err, docs) {
                if (!err) { 
                    console.log(docs);
                    res.send(docs);
                    // process.exit();
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

    // create a post:
    app.post('/post', jsonParser, (req, res, next) => {


		// get the data first:
		let title = req.body.title;
		let body = req.body.body;
        let writer = "dan"
        let img = req.body.img;
        let slug = slugify(req.body.title, {
            replacement: '-', 
            remove: undefined, 
            lower: true,      
            strict: false,
            locale: 'vi', 
            trim: true    
          })

		var data = new Post({ title: title ,body: body, writer: writer, img: img, slug: slug });

      	try {
            data.save(function(err, post) {
                 
        		if (err) return console.error(err);
        		console.log(post.title + " saved to posts collection.");
        		res.json("success");
    		});

        } catch (e) {
            res.status(400).json({ msg: e.message });
            console.log(e);
        }
    })
};

