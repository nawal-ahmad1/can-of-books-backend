'use strict';

const { userModel } = require('../models/user.model');

const getBooks = (req, res) => {
  const { email } = req.query;

  userModel.find({ email: email }, (error, user) => {
    if (error) {
      res.send(error.me);
    } else {
      res.json(user);
    }
  });
};

const createBook = (req, res) => {
  const { email, name, description, status } = req.body;
  console.log(req.body);
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      user.Books.push({ name: name, description: description, status: status });
      user.save();
      res.json(user);
    }
  });
};

const updateBook = (req, res) => {
  const bookIndex = req.params.book_idx;
  const { email, name, description, status } = req.body;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      user.Books.splice(bookIndex, 1, { name, description, status });
      user.save();
      res.json(user);
    }
  });
};

const deleteBook = (request, response) => {
  console.log(request.params);
  const bookIndex = request.params.book_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      response.send(error);
    } else {
      user.Books.splice(bookIndex, 1);
      user.save();
      response.send(user);
    }
  });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
