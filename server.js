const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const Superhero = require('./models/superhero')


const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const PORT = config.get('serverPort');
const db = config.get('dbUrl')

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
