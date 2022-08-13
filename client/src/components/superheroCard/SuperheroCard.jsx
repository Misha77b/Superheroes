import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import { deleteSuperheroe } from '../../API/superheroes/superheroes.thunks';

const SuperheroCard = ({superheroes}) => {
  const dispatch = useDispatch();

  const elId = (e) => {
    const id = e.target.id;
    return id
  }

  const handleDelete = (e) => {
    const id = e.target.id;
    console.log(e.target.id);
    dispatch(deleteSuperheroe(id));
  }
  
  return (
    <>
      {superheroes.map((superhero) => {
        return <div className='superhero-card' key={superhero._id}>
          <img></img>
          <span>{superhero.nickname}</span>
          <Button
              className='view-btn'      
              component={Link}
              id={superhero._id}
              to={`/view/${elId}`} 
          >
              View
          </Button>
          <Button
              className='delete_btn'
              onClick={handleDelete}
              id={superhero._id}
          >
              Delete
          </Button>
        </div>
      })}
    </>
  )
}

export default SuperheroCard

SuperheroCard.propTypes = {
  superheroes: PropTypes.array,
}