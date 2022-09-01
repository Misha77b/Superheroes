import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

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
        <img className='superhero-image' src={`/assets/${superheroe.images}`} alt={superheroe.nickname} />
      </div>
      <div className='info-container'>
        <span>{superheroe.nickname}</span> <br />
        <span>{superheroe.real_name}</span>
        <p>{superheroe.origin_description}</p>
        <p>{superheroe.superpowers}</p>
        <p>{superheroe.catch_phrase}</p>
      </div>
    </div>
  )
}

export default SuperheroDetails