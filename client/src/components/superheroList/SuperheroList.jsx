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

  const [pageNumber, setPageNumber] = useState(0);
  
  const superheroes = useSelector((state) => state.superheroesReducer.superheroes);
  const totalPages = useSelector((state) => state.superheroesReducer.totalPages);
  const loading = useSelector((state) => state.superheroesReducer.loading);
  
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  console.log(totalPages);
  console.log(superheroes);
  // console.log(pages);

  useEffect(() => {
    dispatch(getSuperheroes(pageNumber));
  }, [pageNumber]);

  return (
    <>
      {loading ? <div className='superheroList'>
          <SuperheroCard 
            superheroes={superheroes}
          />
        </div> : <Loader />
      }
      {pages.map((i) => <Button onClick={() => setPageNumber(i)} key={i+1}>{i + 1}</Button>)}
    </>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
}