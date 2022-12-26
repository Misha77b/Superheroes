import { 
    GET_FAVORITES_REQUEST, 
    ADD_TO_FAVORITE_REQUEST, 
    REMOVE_FROM_FAVORITE_REQUEST,
    CHANGE_FAVORITES_COUNT
} from "./favorites.actions";

const initState = {
    favorites: [],
    favoritesCounter: 0, 
    total: 0,
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

        case CHANGE_FAVORITES_COUNT: {
            return { 
                ...state,
                favoritesCounter: action.payload, 
            }
        }

        default:
            return state
    }
}

export default favoritesReducer