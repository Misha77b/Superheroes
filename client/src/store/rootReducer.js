import { combineReducers } from 'redux';
import superheroesReducer from '../API/superheroes/superheroes.reducer';

const rootReducer = combineReducers({
    superheroesReducer,
});

export default rootReducer