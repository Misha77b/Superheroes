import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import { deleteSuperheroe } from '../../API/superheroes/superheroes.thunks';

const SuperheroCard = ({superheroes}) => {
  const dispatch = useDispatch();

  const handleView = (e) => {
    const id = e.target.id;
    console.log(id);
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
        return <Card sx={{width: 345, margin: '20px',}} className='superhero-card' key={superhero._id}>
          <CardActionArea>
            <CardMedia
            sx={{height: 250, objectFit: 'cover',}}
              image={superhero.Images}
              title={superhero.nickname}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {superhero.nickname}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{display: 'flex', justifyContent: 'space-around'}}
          >
            <Button
              className='view-btn'
              component={Link}
              id={superhero._id}
              to={`/view/${handleView}`} 
              onClick={handleView}              
              color='secondary' 
              variant='contained'
            >
              View
            </Button>
            <Button
              className='delete_btn'
              onClick={handleDelete}
              id={superhero._id}
              color='error' 
              variant='contained'
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      })}
    </>
  )
}

export default SuperheroCard

SuperheroCard.propTypes = {
  superheroes: PropTypes.array,
}