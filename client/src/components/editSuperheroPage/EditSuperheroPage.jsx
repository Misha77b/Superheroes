import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import EditSuperhero from '../editSuperhero/EditSuperhero';
import Loader from '../loader/Loader';

import { getSuperheroe } from '../../API/superheroes/superheroes.thunks';

const EditSuperheroPage = () => {
    
    const dispatch = useDispatch();
    
    const { pageId } = useParams();

    const loading = useSelector((state) => (state.superheroesReducer.loading));
    const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 
    
    useEffect(() => {
        dispatch(getSuperheroe(pageId));
        // setImages(superheroe.images);
    }, [pageId]); 

  return (
    <>
        {loading ? <EditSuperhero superheroe={superheroe} pageId={pageId} /> : <Loader />}
    </>
  )
}

export default EditSuperheroPage