var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
let jwtauth = require('../middleware/jwt.js');
var slugify = require('slugify');

/*----------------------------------------------------------------*/

require("dotenv").config();
const User = require('../models/User');
var jsonParser = bodyParser.json()
var salt = bcrypt.genSaltSync(10);

const generateAccessToken = async(id) => {
  return jwt.sign({user_id: id}, process.env.TOKEN_SECRET, { expiresIn: '2h' });
}

// console.log(process.env.TOKEN_SECRET);
module.exports = (app) => {


    app.get('/isUserAuthenticated',jsonParser, jwtauth.verifyJwt, async(req, res, next)=>{
        console.log('auth route called...');
    });

    // login user:
    app.post('/login', jsonParser, async (req, res, next)=> {
        let email       = req.body.email;
        let password    = req.body.password;


        const user = await User.findOne({email: email})
        if(user){
            const validPassword = await bcrypt.compare(password, user.password);
    
            if (validPassword) {
                let token = await generateAccessToken(user.id);
                //res.status(200).json({ message: "Valid password" });
                console.log(user);
                res.json({_id:user._id, firstname: user.firstname, lastname:user.lastname, token:token });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        }else if(!user){
            res.status(401).json({ error: "User does not exist" });
        }
        
    });

    // signup user:
    app.post('/signup', jsonParser, async (req, res, next) => {
        
        let {firstname, lastname, email, password} = req.body;
        let slugmaterial = `${firstname} ${lastname}`
       

        const oldUser = await User.findOne({ email });
        if(oldUser){
            return res.status(409).send("User Already exists, Please login.");
        }
         let slug = slugify(slugmaterial, {
            replacement: '-', 
            remove: undefined, 
            lower: true,      
            strict: false,
            locale: 'vi', 
            trim: true    
        })
        
        /* make sure every user has their own slug... in the backened,
         check if a user slug that is created exists, if it does-gen a new one*/


        let encryptedPassword = await bcrypt.hash(password, 10);
        let data = new User({ firstname: firstname ,lastname: lastname, email: email, slug:slug, password:encryptedPassword });

        try {
            data.save(async(err, user)=> {
                if (err){
                    return console.error(err);
                } 

                let token = await generateAccessToken(user.id);

                console.log("successfully created a new user and generated an access token!");

                console.log(user);
                res.json({_id:user._id, firstname: user.firstname, lastname:user.lastname, slug:slug, token:token });
            });
        }catch(e){
            res.status(400).json({ msg: e.message });
        }
        
    });

	// find one user
    app.get('/users',  async(req, res, next) => {
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

     app.get(`/profile/:slug`, async(req, res, next) => {
        User.findOne({'slug': req.params.slug }, 'slug firstname lastname img twitter facebook instagram website youtube', async (err, docs) =>{
            if (err){
                console.log(err);
            }
            else{
                res.send(docs);
            }
        });
    });
   
};

