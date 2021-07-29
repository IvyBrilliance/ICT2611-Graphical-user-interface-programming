var mongoose = require('mongoose');
let Schema = mongoose.Schema;

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
  twitter:{
    type: String
  },
  instagram: {
    type: String
  }, 
  facebook:{
    type: String
  },
  youtube: {
    type: String
  },
  website:{
    type:String
  },
  password: {
    type: String,
    required: true
  },
  slug: {
    type: String,
     required: true,
     unique: true
  },
  img: {
   type: String,
    required: false
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;