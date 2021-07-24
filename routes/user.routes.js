var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const jwt = require('jsonwebtoken');
/*----------------------------------------------------------------*/
const User = require('../models/User');


module.exports = (app) => {
    // login user:
    app.post('/login', async (req, res, next)=>{
        res.send('ok');
    });

    // signup user:
    app.post('/signup', jsonParser, async (req, res, next) => {
        console.log(req.body);
        
        let firstname=req.body.firstname;
        let lastname= req.body.lastname;
        let email= req.body.email;
        let password= req.body.password;

        var data = new User({ firstname: firstname ,lastname: lastname, email: email, password:password });
        try {
            data.save(function(err, user) {
                 
                if (err) return console.error(err);
                console.log(user.firstname+ " "+ user.lastname+ " saved to users collection.");
                res.json("success");
            });
        }catch(e){
            res.status(400).json({ msg: e.message });
        }
        
    });

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

   
};

