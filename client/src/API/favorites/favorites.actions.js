export const ADD_TO_FAVORITE_REQUEST = 'ADD_TO_FAVORITE_REQUEST';
export const addToFavoriteRequest = (data) => ({
    type: ADD_TO_FAVORITE_REQUEST,
    payload: data
});

export const GET_FAVORITES_REQUEST = 'GET_FAVORITES_REQUEST';
export const getFavoritesRequest = (data) => ({
    type: GET_FAVORITES_REQUEST,
    payload: data
});

export const REMOVE_FROM_FAVORITE_REQUEST = 'REMOVE_FROM_FAVORITE_REQUEST';
export const removeFromFavoriteRequest = (data) => ({
    type: REMOVE_FROM_FAVORITE_REQUEST,
    payload: data
});