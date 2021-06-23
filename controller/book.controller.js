'use strict';

const userModel   = require('../models/user.model');

const getBooks = (request, response) => {
  const { email } = request.query;

  userModel.find({ email: email }, (error, user) => {
    if (error) {
      response.send(error.me);
    } else {
      response.json(user);
    }
  });
};



const createBook = (request, response) => {
  console.log(request.body);
  const { email, name} = request.body;

  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      response.send(error);
    } else {
      user.books.push({ name: name });
      user.save();
      response.json(user);
    }
  });
};

const updateBook = (request, response) => {
  console.log(request.params);
  const bookIndex = request.params.book_idx;
  const { userEmail, bookName } = request.body;

  userModel.findOne({ email: userEmail }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.books.splice(bookIndex, 1, { name: bookName });
      userData.save();
      response.send(userData);
    }
  });
};

const deleteBook = (request, response) => {
  console.log(request.params);
  const bookIndex = request.params.book_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.books.splice(bookIndex, 1);
      userData.save();
      response.send(userData);
    }
  });
};

module.exports = {
  getBooks,
  createBook,
 
};
