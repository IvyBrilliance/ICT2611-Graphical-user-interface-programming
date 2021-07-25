var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
let jwtauth = require('../middleware/jwt.js');
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

        try {
           // query the db and find a match:
           User.findOne({'email': email, 'password': password}, '_id firstname lastname ', async(err, docs)=>{
                if(err){
                    console.log(err)
                }else{
                     let token = await generateAccessToken(docs.id);
                    console.log(docs);
                    res.json({_id:docs._id, firstname: docs.firstname, lastname:docs.lastname, token:token });
                }
            })
        }catch(e){
            res.status(400).json({ msg: e.message });
        }
    });

    // signup user:
    app.post('/signup', jsonParser, async (req, res, next) => {
        
        let {firstname, lastname, email, password} = req.body;

        const oldUser = await User.findOne({ email });
        if(oldUser){
            return res.status(409).send("User Already exists, Please login.");
        }

        let encryptedPassword = await bcrypt.hash(password, 10);
        let data = new User({ firstname: firstname ,lastname: lastname, email: email, password:password });

        try {
            data.save(async(err, user)=> {
                if (err){
                    return console.error(err);
                } 

                let token = await generateAccessToken(user.id);

                console.log("successfully created a new user and generated an access token!");

                console.log(user);
                res.json({_id:user._id, firstname: user.firstname, lastname:user.lastname, token:token });
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

   
};

