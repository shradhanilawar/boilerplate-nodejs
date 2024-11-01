const express = require('express');
const routes = require('./routes/route');
const app = express();
require('dotenv').config();

const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to crud application' });
});

// Base path
//app.use('/api', routes);

// Handling Invalid URL
app.use('*', (req, res) => {
  res.send({ msg: 'Invalid URL!!!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
