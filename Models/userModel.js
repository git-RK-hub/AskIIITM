const mongoose = require('mongoose');

const userSchema = mongoose.model({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  passwordChangedAt: Date,
  passwordResetToken: String
});

const Users = mongoose.Schema('Users', userSchema);

module.exports = Users;