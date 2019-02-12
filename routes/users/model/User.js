const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const UserSchema = new mongoose.Schema({
    firstName: { type: String, default: ''},
    lastName: { type: String, default: ''},
    email: { type: String, unique: true, default: ''},
    password: { type: String, default: ''},
    gender: { type: String, default: ''},
    address: { type: String, default: ''},
    city: { type: String, default: ''},
    state: { type: String, default: ''},
    zipcode: { type: String, default: ''},
    dob: { type: String, default: ''},
    occupation: { type: String, default: ''},
    timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")}
});

module.exports = mongoose.model('User', UserSchema);