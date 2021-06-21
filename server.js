const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
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
app.listen(3000) // kick start the express server to work
