const express = require('express') // require the express package
const app = express() // initialize your express app instance
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');

const axios = require('axios'); // require the package

app.use(cors()) // after you initialize your express app instance
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('TEST')
  
  axios.get(url).then(response => response.data).catch(error => console.log(error));
  // our endpoint function response
})
 

app.get('/test', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('proof of live')
  
  axios.get(url).then(response => response.data).catch(error => console.log(error));
  // our endpoint function response
})
app.listen(PORT) // kick start the express server to work
