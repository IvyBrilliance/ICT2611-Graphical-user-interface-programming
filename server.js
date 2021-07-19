const express = require("express");
const app = express();
const PORT = 5000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

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
