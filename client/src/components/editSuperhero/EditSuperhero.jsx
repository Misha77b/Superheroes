import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import useStylesEditSuperhero from './useStylesEditSuperhero';

import { getSuperheroe, updateSuperheroe } from '../../API/superheroes/superheroes.thunks';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const EditSuperhero = () => {
    useStylesEditSuperhero();
    const dispatch = useDispatch();
  
    const { pageId } = useParams();
    console.log(pageId);
    
    const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 
    console.log(superheroe);

    useEffect(() => {
        dispatch(getSuperheroe(pageId))
    }, [pageId]); 

  return (
    <>
        <div>EditSuperhero</div>
        <Button
            className='view-btn'
            component={Link}
            id={superheroe._id}
            to={`/view/${superheroe._id}`}
            color='secondary' 
            variant='contained'
        >
            Save changes
        </Button>
    </>
  )
}

export default EditSuperhero