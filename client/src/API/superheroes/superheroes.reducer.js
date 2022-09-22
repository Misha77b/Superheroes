import { 
    CREATE_SUPERHEROE_REQUEST,
    GET_SUPERHEROES_REQUEST, 
    UPDATE_SUPERHEROE_REQUEST, 
    UPDATE_SUPERHEROE_SUCCESS, 
    DELETE_SUPERHEROE_REQUEST, 
    GET_SUPERHEROE_REQUEST,
} from "./superheroes.actions";

const initState = {
    createSuperheroeRequest: {},
    loading: false,
    superheroeId: null,
    updateSuperheroeRequest: null,
    superheroes: [],
    superheroe: {},
    deleteSuperheroeRequest: null,
}

const superheroesReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_SUPERHEROES_REQUEST: {
            return {
                ...state,
                superheroes: action.payload,
                loading: true,
            }
        }

        case GET_SUPERHEROE_REQUEST: {
            return {
                ...state,
                superheroe: action.payload,
                loading: true,
            }
        }

        case CREATE_SUPERHEROE_REQUEST: {
            return {
                ...state,
                createSuperheroeRequest: action.payload,
                superheroes: [...state.superheroes, action.payload],
                loading: true,
            }
        }

        case UPDATE_SUPERHEROE_REQUEST: {
            return{
                ...state,
                superheroeId: action.payload,
                // loading: true,
            }
        }

        case UPDATE_SUPERHEROE_SUCCESS: {
            return {
                ...state, 
                superheroes: state.superheroes.map((superheroe) => {superheroe._id === action.payload ? updatedVisit : superheroe}),
                superheroeId: null,
                loading: true,
            }
        }

        case DELETE_SUPERHEROE_REQUEST: {
            return {
                ...state,
                deleteSuperheroeRequest: action.payload,
                superheroes: state.superheroes.filter((superheroe) => superheroe._id !== action.payload),
                loading: true,
            }
        }

        default:
            return state
    }
}

export default superheroesReducer