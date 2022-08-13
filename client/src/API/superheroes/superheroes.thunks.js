import { 
    createSuperheroeRequest, 
    getSuperheroesRequest, 
    getSuperheroeRequest, 
    deleteSuperheroeRequest, 
    updateSuperheroeSuccess, 
} from "./superheroes.actions";
import { setError } from "../errorHandler/errorHandler.actions";

export const createSuperheroe = (createSuperheroeData) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createSuperheroeData),
        }).then(res => res.json())
        .then(createSuperheroe => {
            console.log(createSuperheroeData);
            dispatch(createSuperheroeRequest(createSuperheroe));
        }).catch(err => {
            dispatch(setError(err));
        })
    }
};

export const getSuperheroes = () => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
        .then(superheroes => {
            dispatch(getSuperheroesRequest(superheroes));
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

export const updateSuperheroe = (superheroe) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/superheroes/view/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(superheroe),
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