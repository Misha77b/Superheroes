import React from "react";
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import useStylesSuperheroDetails from "./useStylesSuperheroDetails";

const editBtn = {
  fontFamily: 'Lato, sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  color: '#F2F1F4',
  background: 'transparent',
  border :'2px solid #F2F1F4',
  borderRadius: '10px',
  '&:hover': {
    background: 'transparent'
  }
}

const SuperheroDetails = ({superheroe}) => {
  useStylesSuperheroDetails();

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
          sx={editBtn}
          variant='contained'
        >
          Edit Superhero
        </Button>
      </div>
    </div>
  )
}

export default SuperheroDetails

SuperheroDetails.propTypes = {
  superheroe: PropTypes.object,
}