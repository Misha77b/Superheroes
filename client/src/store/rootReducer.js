import { combineReducers } from 'redux';
import superheroesReducer from '../API/superheroes/superheroes.reducer';
import favoritesReducer from '../API/favorites/favorites.reducer';

const rootReducer = combineReducers({
    superheroesReducer,
    favoritesReducer
});

export default rootReducer