import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";

import { getSuperheroe } from '../../API/superheroes/superheroes.thunks'

const SuperheroDetails = () => {
  const dispatch = useDispatch();
  const { pageId } = useParams();
  console.log(pageId);
  
  const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 
  console.log(superheroe);

  useEffect(() => {
    dispatch(getSuperheroe(pageId))
  }, [pageId]); 

  return (
    <div>SuperheroDetails</div>
  )
}

export default SuperheroDetails