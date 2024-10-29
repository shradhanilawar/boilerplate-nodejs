const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to crud application' });
});

// Handling Invalid URL
app.use('*', (req, res) => {
  res.send({ msg: 'Invalid URL!!!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
