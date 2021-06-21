'use strict';
const mongoose = require('mongoose');
const bookSchema = require('./book.model');



const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]

});

const userModel = mongoose.model('user', userSchema);



module.exports = userModel;