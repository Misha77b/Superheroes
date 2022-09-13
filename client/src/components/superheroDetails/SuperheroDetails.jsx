import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { getSuperheroe } from '../../API/superheroes/superheroes.thunks'
import useStylesSuperheroDetails from "./useStylesSuperheroDetails";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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
        <h2 className='superheroe-nickname'>{superheroe.nickname}</h2> <br />
        <span className='superheroe-realName'>{superheroe.real_name}</span>
        <p className='superheroe-originalDescription'>{superheroe.origin_description}</p>
        <p className='superheroe-superpowers'>{superheroe.superpowers}</p>
        <p className='superheroe-catchPhrase'>{superheroe.catch_phrase}</p>
        <Button
          className='edit-btn'
          component={Link}
          id={superheroe._id}
          to={`/edit/${superheroe._id}`}
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            color: 'black',
            background: 'transparent',
            border :'2px solid #2E2E2E',
            borderRadius: '10px',
            '&:hover': {
              background: 'transparent'
            }
          }}
          variant='contained'
        >
          Edit Superhero
        </Button>
      </div>
    </div>
  )
}

export default SuperheroDetails