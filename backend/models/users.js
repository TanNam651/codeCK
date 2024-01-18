const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    index: true,
    unique: true,
    lowercase: true
  },
  username: {
    type: String,
    require: true,
    trim: true,
    index: true,
    unique: true,
    lowercase: true
  },
  
  email: {
    type: String,
    require: true,
    trim: true,
    index: true,
    lowercase: true,
    
  },
  password: {
    type: String,
    require: true
  },
  roles: {
    User: {
      type: Number,
      default: 2001
    },
    Editor: Number,
    Admin: Number
  },
  phones: {
    type: String
  },
  refreshToken: String
});

module.exports = mongoose.model('User', userSchema)