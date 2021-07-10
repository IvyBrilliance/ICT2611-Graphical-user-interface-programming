const express = require("express");
const app = express();
const PORT = 5000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// // create a schema:
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
// 	username: String,
// 	password: String,
// 	date_created: Date,
// 	isValidated: Boolean
// });

// // compile model from the schema
// var userSchema = mongoose.model('users2', userSchema);

// app.use(express.bodyParser());

app.use(bodyParser.json())

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));




require("./routes/routes.js")(app);
app.listen(PORT, () =>{ console.log("started on port 5000") });
