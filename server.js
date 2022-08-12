const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

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

// app.use('/superheroes', superheroRouter);



// app.get('/superheroes', function (req, res) {
//   res.send(superheroes);
// });

// app.post('/superheroes', function (req, res) {
//   const { nickname, real_name, origin_description, superpowers, catch_phrase, Images } = req.body;
//   const superhero = new Superhero ({ nickname, real_name, origin_description, superpowers, catch_phrase, Images });
//   superhero
//     .save()
//     .then((data) => res.send(data))
//     .catch((error) => console.log(error))
// });

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
