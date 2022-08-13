import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useStylesSuperheroList from './useStylesSuperheroList';
import SuperheroCard from '../superheroCard/SuperheroCard'

const SuperheroList = ({superheroes}) => {
  useStylesSuperheroList()

  return (
    <div className='superheroList'>
      <SuperheroCard 
        superheroes={superheroes}
      />
    </div>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
  superheroes: PropTypes.array,
}