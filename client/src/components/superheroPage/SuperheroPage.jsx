import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import Loader from '../loader/Loader';
import SuperheroDetails from '../superheroDetails/SuperheroDetails'

import { getSuperheroe } from '../../API/superheroes/superheroes.thunks';

const SuperheroPage = () => {
  const dispatch = useDispatch();
  
  const { pageId } = useParams();
  
  const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 

  useEffect(() => {
    dispatch(getSuperheroe(pageId))
  }, [pageId]); 
  const loading = useSelector((state) => state.superheroesReducer.loading); 
  
  return (
    <>
      {loading ? <SuperheroDetails superheroe={superheroe}/> : <Loader />}      
    </>
  )
}

export default SuperheroPage