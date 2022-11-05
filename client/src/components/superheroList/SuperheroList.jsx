import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useStylesSuperheroList from './useStylesSuperheroList';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

import SuperheroCard from '../superheroCard/SuperheroCard';
import Loader from '../loader/Loader';
import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';

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
  console.log(pages);

  useEffect(() => {
    dispatch(getSuperheroes(pageNumber));
  }, [pageNumber]);

  const goToPreviousPage = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goToNextPage = () => {
    setPageNumber(Math.min(totalPages -1, pageNumber + 1));
  };

  return (
    <>
      {loading ? <div className='superheroList'>
          <SuperheroCard 
            superheroes={superheroes}
          />
        </div> : <Loader />
      }

      {/* work with pagination buttons style*/}
      {/* Pagintion page controll section */}
      <Stack spacing={2}>
        <Pagination 
          count={totalPages}
          page={pageNumber + 1}
          onChange={(_, num) => setPageNumber(num - 1)}
        />
      </Stack>
      <Button disabled={pageNumber === 0} onClick={goToPreviousPage}>Prev</Button>
      {pages.map((i) => <Button onClick={() => setPageNumber(i)} key={i}>{i + 1}</Button>)}
      <Button disabled={pageNumber === totalPages -1} onClick={goToNextPage}>Next</Button>
    </>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
}