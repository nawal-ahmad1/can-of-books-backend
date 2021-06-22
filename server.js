const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios'); // require the package
const seedUserData = require('./models/user.model');
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require('./controller/book.controller');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', function (req, res) {
  res.send('TEST');

  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
});

app.get('/test', function (req, res) {
  res.send('proof of live');

  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  // our endpoint function response
});

app.get('/books', getBooks);

app.post('/books', createBook);

app.put('/book/:book_idx', updateBook);

app.delete('/book/book_idx', updateBook);

// seedUserData();
app.listen(PORT); // kick start the express server to work
