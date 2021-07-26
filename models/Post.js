var mongoose = require('mongoose');
let Schema = mongoose.Schema;


const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  writer: {
    type: mongoose.ObjectId,
    required: true
  },
  slug: {
    type: String,
     required: true
  },
  img: {
   type: String,
    required: true
  },
  publish_date: {
    type: Date,
    default: Date.now
  }
});


const Post = mongoose.model('posts', PostSchema);


module.exports = Post;