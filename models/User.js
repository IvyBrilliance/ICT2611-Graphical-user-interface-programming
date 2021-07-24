// import { Schema, model } from 'mongoose';
var mongoose = require('mongoose');
let Schema = mongoose.Schema;
// let model = mongoose.model;


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
    unique: true,
    index:true,
    sparse:true
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

const UserS = mongoose.model('users', UserSchema);

module.exports = UserS;
/*{
name: "dan",
email: "daniel@gmail.com",
password: "dan"
}*/