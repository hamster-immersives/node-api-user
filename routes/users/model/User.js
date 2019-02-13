const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const UserSchema = new mongoose.Schema({
    firstName: { type: String, default: ''},
    email: { type: String, default: ''},
    gender: { type: String, default: ''},
    city: { type: String, default: ''},
    state: { type: String, default: ''},
    zipcode: { type: String, default: ''},
    age: { type: Number, default: 0},
    likes: { type: Number, default: 0},
    hobbies: {type: Array, default: []},
    occupation: { type: String, default: ''},
    timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")}
});

module.exports = mongoose.model('User', UserSchema);



/*

{
    "firstName": "Angry Hamster",
    "email": "angryhamster@gmail.com",
    "gender": "male",
    "city": "New York City",
    "state": "NY",
    "zipcode": "11214",
    "age": 21,
    "likes": 5,
    "hobbies": ["eat", "football", "swimming"]
    "occupation": "Lawyer"
}

{
    "firstName": "Happy Hamster",
    "email": "happyhamster@gmail.com",
    "gender": "female",
    "city": "New York City",
    "state": "NY",
    "zipcode": "11215",
    "age": 18,
    "likes": 50,
    "hobbies": ["eat", "basketball"],
    "occupation": "accountant"
}

{
    "firstName": "Funny Hamster",
    "email": "funnyhamster@gmail.com",
    "gender": "male",
    "city": "New York City",
    "state": "NY",
    "zipcode": "11214",
    "age": 24,
    "likes": 100,
    "hobbies": ["eat", "comedy"],
    "occupation": "actor"
}

{
    "firstName": "Hungry Hamster",
    "email": "hungryhamster@gmail.com",
    "gender": "male",
    "city": "New York City",
    "state": "NY",
    "zipcode": "11215",
    "age": 26,
    "likes": 35,
    "hobbies": ["eat"],
    "occupation": "blogger"
}



const UserSchema = new mongoose.Schema({
    firstName: { type: String, default: ''},
    lastName: { type: String, default: ''},
    email: { type: String, default: ''},
    password: { type: String, default: ''},
    gender: { type: String, default: ''},
    address: { type: String, default: ''},
    city: { type: String, default: ''},
    state: { type: String, default: ''},
    zipcode: { type: String, default: ''},
    age: { type: Number, default: 0},
    likes: { type: Number, default: 0},
    hobbies: {type: Array, default: []},
    occupation: { type: String, default: ''},
    timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")}
});

*/