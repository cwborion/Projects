var mongoose = require('mongoose');

// User Passport.js for Password login
var Student = mongoose.model('Student', {
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
    //HASH
  },
  savedJobs: {
    type: [String]
  },
  fieldOfStudy: {
    type: String
  },
  skills: {
    type: String
  }
});

module.exports = {
  Student
}
