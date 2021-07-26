var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// var slug = require('slug'); // unistall
var slugify = require('slugify');
const jwt = require('jsonwebtoken');

const Post = require('../models/Post');
var User = require('../models/User');

module.exports = (app) =>{

    // find one post
    app.get(`/post/:slug`, async(req, res, next) => {
        Post.findOne({'slug': req.params.slug }, 'slug title body img writer_details', async (err, docs) =>{
            if (err){
                console.log(err);
            }
            else{
                res.send(docs);
            }
        });
    });


    // find all posts
    app.get('/posts',  async(req, res, next) => {
        try {
            Post.find({}, async(err, docs)=> {
                if (!err) { 
                    console.log(docs)
                    res.send(docs);
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
    app.post('/post', jsonParser, async(req, res, next) => {
		let title = req.body.title;
		let body = req.body.body;
        let writer = req.body.writer;
        let img = req.body.img;
        let slug = slugify(req.body.title, {
            replacement: '-', 
            remove: undefined, 
            lower: true,      
            strict: false,
            locale: 'vi', 
            trim: true    
        })

        const user = await User.findOne({_id: writer })
        let {firstname, lastname} = user;
        let writerDetails = `${firstname} ${lastname}`;

		var data = new Post({ title: title ,body: body, writer: writer, img: img, slug: slug, writer_details: writerDetails});

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