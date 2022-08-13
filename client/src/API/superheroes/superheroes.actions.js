export const CREATE_SUPERHEROE_REQUEST = 'CREATE_SUPERHEROE_REQUEST';
export const createSuperheroeRequest = (data) => ({
    type: CREATE_SUPERHEROE_REQUEST,
    payload: data
});

export const GET_SUPERHEROES_REQUEST = 'GET_SUPERHEROES_REQUEST';
export const getSuperheroesRequest = (data) => ({
    type: GET_SUPERHEROES_REQUEST,
    payload: data
});

export const GET_SUPERHEROE_REQUEST = 'GET_SUPERHEROE_REQUEST';
export const getSuperheroeRequest = (data) => ({
    type: GET_SUPERHEROE_REQUEST,
    payload: data
});

export const UPDATE_SUPERHEROE_REQUEST = 'UPDATE_SUPERHEROE_REQUEST';
export const updateSuperheroeRequest = (data) => ({
    type: UPDATE_SUPERHEROE_REQUEST,
    payload: data
})

export const UPDATE_SUPERHEROE_SUCCESS = 'UPDATE_SUPERHEROE_SUCCESS';
export const updateSuperheroeSuccess = (data) => ({
    type: UPDATE_SUPERHEROE_SUCCESS,
    payload: data,
})

export const DELETE_SUPERHEROE_REQUEST = 'DELETE_SUPERHEROE_REQUEST';
export const deleteSuperheroeRequest = (data) => ({
    type: DELETE_SUPERHEROE_REQUEST,
    payload: data
})