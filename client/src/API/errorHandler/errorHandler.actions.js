export const SET_ERROR = 'SET_ERROR';
export const setError = (err) => ({
    type: SET_ERROR,
    payload: err, 
});

export const RESET_ERROR = 'RESET_ERROR';
export const resetError = () => ({
    type: RESET_ERROR, 
});