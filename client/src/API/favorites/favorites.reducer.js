import { 
    ADD_TO_FAVORITE_REQUEST, 
    GET_FAVORITES_REQUEST, 
    REMOVE_FROM_FAVORITE_REQUEST 
} from "./favorites.actions";

const initState = {
    favorites: [],
    loading: false,
}

const favoritesReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_FAVORITES_REQUEST: {
            return {
                ...state,
                favorites: action.payload,
                loading: true,
            }
        }        

        case ADD_TO_FAVORITE_REQUEST: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        }        

        case REMOVE_FROM_FAVORITE_REQUEST: {
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite._id != action.payload),
                loading: true,
            }
        }        

        default:
            return state
    }
}

export default favoritesReducer