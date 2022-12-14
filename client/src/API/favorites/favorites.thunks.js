import {
    getFavoritesRequest,
    addToFavoriteRequest,
    removeFromFavoriteRequest
} from './favorites.actions'
import { setError } from "../errorHandler/errorHandler.actions";

export const addToFavorite = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/favorites`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
        .then(addFavorite => {
            dispatch(addToFavoriteRequest(addFavorite));
        }).catch(err => {
            dispatch(setError(err));
        })
    }
};