const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const superheroRouter = require('./routes/superheroes');


const app = express();
app.use(cors());

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const PORT = config.get('serverPort');
const db = config.get('dbUrl')

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


// Use Routes
// test app get request
app.use('/superheroes', superheroRouter)

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
