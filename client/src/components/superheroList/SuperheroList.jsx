import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';

import useStylesSuperheroList from './useStylesSuperheroList';
import SuperheroCard from '../superheroCard/SuperheroCard';
import Loader from '../loader/Loader';
import { Button } from '@mui/material';

const SuperheroList = () => {
  useStylesSuperheroList();
  const dispatch = useDispatch(); 

  const superheroes = useSelector((state) => state.superheroesReducer.superheroes);
  const totalPages = useSelector((state) => state.superheroesReducer.totalPages);
  const loading = useSelector((state) => state.superheroesReducer.loading);

  console.log(totalPages);
  console.log(superheroes);

  useEffect(() => {
    dispatch(getSuperheroes());
  }, []);

  return (
    <>
      {loading ? <div className='superheroList'>
          <SuperheroCard 
            superheroes={superheroes}
          />
        </div> : <Loader />
      }
      <Button onClick={}>previous</Button>
      <Button onClick={}>next</Button>
    </>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
}