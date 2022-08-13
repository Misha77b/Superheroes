import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStylesSuperheroList from './useStylesSuperheroList';

import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';

import SuperheroCard from '../superheroCard/SuperheroCard'

const SuperheroList = () => {
  const dispatch = useDispatch();
  useStylesSuperheroList()

  const superheroes = useSelector((state) => state.superheroesReducer.superheroes);

  useEffect(() => {
    dispatch(getSuperheroes());
  }, []);

  console.log(superheroes);

  return (
    <div className='superheroList'>
      <SuperheroCard 
        superheroes={superheroes}
      />
    </div>
  )
}

export default SuperheroList