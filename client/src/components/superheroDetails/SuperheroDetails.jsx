import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Container, Typography, Box} from '@mui/material';

import { getSuperheroe } from '../../API/superheroes/superheroes.thunks'
import useStylesSuperheroDetails from "./useStylesSuperheroDetails";

const SuperheroDetails = () => {
  useStylesSuperheroDetails();

  const dispatch = useDispatch();
  
  const { pageId } = useParams();
  console.log(pageId);
  
  const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 
  console.log(superheroe);

  useEffect(() => {
    dispatch(getSuperheroe(pageId))
  }, [pageId]); 

  return (
    <div className="superheroDetails">
      <div className='img-container'>
        <img className='superhero-image' src={superheroe.Images} alt='girl-and-pet' />
      </div>
      <div className='info-container'>
        
      </div>
    </div>
  )
}

export default SuperheroDetails