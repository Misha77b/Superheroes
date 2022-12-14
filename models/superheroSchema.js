const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const superheroSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    real_name: {
        type: String,
        required: true,
    },
    origin_description: {
        type: String,
        required: true,
    },
    superpowers: {
        type: String,
        required: true,
    },
    catch_phrase: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true
    }
});

const superhero = mongoose.model("superhero", superheroSchema);
module.exports = superhero;