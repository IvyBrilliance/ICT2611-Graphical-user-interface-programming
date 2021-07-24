const express = require("express");


var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const app = express();


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var allowedOrigins = ['http://localhost:3000', 'http://localhost:3000/posts'];
app.use(cors({
  origin: function(origin, callback){    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) {return callback(null, true)};

    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +  'allow access from the specified Origin.';
      // return callback(new Error(msg), false);
    	return callback(null, true); // allow all of em
    }    
    return callback(null, true);
  }
}));
// app.use(cors())



require("./routes/user.routes.js")(app);
require("./routes/post.routes.js")(app);
app.listen(PORT, () =>{ console.log("started on port 5000") });
