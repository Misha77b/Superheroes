import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useStylesSuperheroList from './useStylesSuperheroList';
import SuperheroCard from '../superheroCard/SuperheroCard';
import Loader from '../loader/Loader';

const SuperheroList = ({superheroes}) => {
  useStylesSuperheroList();

  const loading = useSelector((state) => state.superheroesReducer.loading);

  return (
    <>
      {loading ?
      <div className='superheroList'>
        <SuperheroCard 
          superheroes={superheroes}
        />
      </div> : <Loader />
      }
    </>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
  superheroes: PropTypes.array,
}