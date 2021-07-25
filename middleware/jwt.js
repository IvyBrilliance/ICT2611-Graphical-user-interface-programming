const jwt = require('jsonwebtoken');
require("dotenv").config();


const verifyJwt  = (req, res , next)=>{
	theToken = req.headers.token;
	console.log('be: '+ theToken)
	if(!theToken){
		res.send('No token provided, user cannot be authenticated.');
	}else{
		jwt.verify(theToken, process.env.TOKEN_SECRET ,(err, decoded)=>{
			if(err){
				res.json({auth: false, message: "Failed to authenticate"});
			}else{
				// we somewhat store the Id so that we dont have to authenticate everytime:
				//
				console.log(decoded)
				req.user_id = decoded.user_id;
				res.json({auth: true, message: "Successfully authenticated"});
				next();
			}
		});
	}

	
}

module.exports = {
	verifyJwt
}