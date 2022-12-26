const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema ({
    favorites: [
        
    ],
    favoriteQuantity: {
        type: Number,
    }
})

const favorites = mongoose.model("favorites", superheroSchema);
module.exports = favorites;