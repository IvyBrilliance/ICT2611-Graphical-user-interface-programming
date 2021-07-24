var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// var slug = require('slug'); // unistall
var slugify = require('slugify');
const jwt = require('jsonwebtoken');

const Post = require('../models/Post');


module.exports = (app) =>{

    // find one post
    app.get(`/post/:slug`, async(req, res, next) => {
        Post.findOne({'slug': req.params.slug }, 'slug title body img writer', function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                // console.log("Result : ", docs);
                res.send(docs);
            }
        });
    });


    // find all posts
    app.get('/posts',  async(req, res, next) => {
        try {
            Post.find({}, function(err, docs) {
                if (!err) { 
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
}