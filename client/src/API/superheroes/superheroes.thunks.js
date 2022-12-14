import { 
    createSuperheroeRequest, 
    getSuperheroesRequest, 
    getSuperheroeRequest, 
    deleteSuperheroeRequest, 
    updateSuperheroeSuccess, 
    getTotalPagesRequest,
} from "./superheroes.actions";
import { setError } from "../errorHandler/errorHandler.actions";

export const createSuperheroe = (createSuperheroeData) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes`, {
            method: 'POST',
            body: createSuperheroeData,
        }).then(res => res.json())
        .then(createSuperheroe => {
            dispatch(createSuperheroeRequest(createSuperheroe));
        }).catch(err => {
            dispatch(setError(err));
        })
    }
};

export const getSuperheroes = (page) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes?page=${page}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
        .then(({totalPages, superheroes}) => {
            dispatch(getSuperheroesRequest(superheroes));
            dispatch(getTotalPagesRequest(totalPages));
        })
        .catch(err => {
            dispatch(setError(err));
        })
    }
};

export const getSuperheroe = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes/view/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
        .then(superheroe => {dispatch(getSuperheroeRequest(superheroe))})
        .catch(err => {
            dispatch(setError(err))
        })
    }
};

export const updateSuperheroe = (id, editSuperheroeData) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes/edit/${id}`, {
            method: "PUT",
            body: editSuperheroeData,
        }).then(res => res.json())
        .then(superheroe => {dispatch(updateSuperheroeSuccess(superheroe))})
        .catch(err => {
            dispatch(setError(err))
        })
    }
};

export const deleteSuperheroe = (id) => {
    return (dispatch) => {
        fetch (`http://localhost:5000/superheroes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            dispatch(deleteSuperheroeRequest(id))
        }).catch(err => {
            dispatch(setError(err))
        })
    }
};