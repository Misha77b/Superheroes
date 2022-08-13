import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';

const Main = () => {
  const dispatch = useDispatch();

  const superheroes = useSelector((state) => state.superheroesReducer.superheroes);

  useEffect(() => {
    dispatch(getSuperheroes());
  }, []);

  console.log(superheroes);

  return (
    <div>Main</div>
  )
}

export default Main