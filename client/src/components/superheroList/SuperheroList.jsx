import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useStylesSuperheroList from './useStylesSuperheroList';

import SuperheroCard from '../superheroCard/SuperheroCard';
import Loader from '../loader/Loader';
import PaginationControl from '../paginationControl/PaginationControl';

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

  return (
    <>
      {loading ? <div className='superhero-layout'>
          <div className='superheroList'>
            <SuperheroCard 
              superheroes={superheroes}
            />
          </div>
          <PaginationControl 
            totalPages={totalPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div> : <Loader />
      }

      {/* Pagintion page controll section, work with styling */}
      
    </>
  )
}

export default SuperheroList

SuperheroList.propTypes = {
}