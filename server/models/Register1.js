const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String, // Updated field name for phone number
  collegeName: String,
  years: String, // Updated field name for graduation year
  program: String,
});

const RegisterModel = mongoose.model('registers', RegisterSchema);

module.exports = RegisterModel;
