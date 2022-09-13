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

  const handleDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteSuperheroe(id));
  }
  
  return (
    <>
      {superheroes.map((superheroe) => {
        return <Card sx={{width: 345, margin: '20px',}} className='superhero-card' key={superheroe._id}>
          <CardActionArea>
            <CardMedia
            sx={{height: 250, objectFit: 'cover',}}
              image={`/assets/${superheroe.images}`}
              title={superheroe.nickname}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: "center"}}>
                {superheroe.nickname}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{display: 'flex', justifyContent: 'space-around'}}
          >
            <Button
              className='view-btn'
              component={Link}
              id={superheroe._id}
              to={`/view/${superheroe._id}`}
              color='secondary' 
              variant='contained'
            >
              View
            </Button>
            <Button
              className='delete_btn'
              onClick={handleDelete}
              id={superheroe._id}
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