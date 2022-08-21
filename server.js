const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const superheroRouter = require('./routes/superheroes');

const app = express();
app.use(cors());
// app.use(fileUpload({}))

// Body parser middleware
app.use(bodyParser.json());

// DB Config
const PORT = config.get('serverPort');
const db = config.get('dbUrl')

// Passport middleware
app.use(passport.initialize());

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


// Use Routes
app.use('/superheroes', superheroRouter)

// PORT
app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
