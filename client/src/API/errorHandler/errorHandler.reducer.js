import { SET_ERROR, RESET_ERROR } from "./errorHandler.actions";

const initState = {
    errorObject: {
        isShowAlert: false,
        error: {}, 
    },  
} 

const errorHandlerReducer = (state = initState, action) => {

    switch(action.type) {
    
        case SET_ERROR: 
            return {
                errorObject: {
                    isShowAlert: true,
                    error: action.payload, 
                }
            }
        
        case RESET_ERROR: 
            return {
                errorObject: {
                    isShowAlert: false,
                    error: null, 
                }
            }
        
        
        default: 
        return state;
    
    }
}
    
    
export default errorHandlerReducer; 