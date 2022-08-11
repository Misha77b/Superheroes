const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const PORT = config.get('serverPort')

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
