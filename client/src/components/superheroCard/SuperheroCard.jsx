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
import { addToFavorite } from '../../API/favorites/favorites.thunks';

const SuperheroCard = ({superheroes}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteSuperheroe(id));
  }

  const addToFav = (e) => {
    const id = e.target.id;
    dispatch(addToFavorite(id))
  }
  
  return (
    <>
      {superheroes.map((superheroe) => {
        return <Card sx={{width: 345, margin: '20px', background: '#272933'}} className='superhero-card' key={superheroe._id}>
          <CardActionArea>
            <CardMedia
              sx={{height: 250, objectFit: 'cover',}}
              image={`/assets/${superheroe.images}`}
              title={superheroe.nickname}
            />
            <CardContent sx={{paddingBottom: '0'}}>
              <Typography gutterBottom variant="h5" component="h5" sx={{textAlign: "center", color: '#CCCCCC', paddingBottom: '0'}}>
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
              sx={{
                backgroundColor: '#101415', 
                color: '#CCCCCC'
              }}
              variant='contained'
            >
              View
            </Button>
            <Button
              className='delete_btn'
              onClick={handleDelete}
              id={superheroe._id}
              sx={{
                backgroundColor: '#101415', 
                color: '#CCCCCC', 
                '&:hover':{
                  background: '#FF2400'}
              }}
              variant='contained'
            >
              Delete
            </Button>
          </CardActions>
          <Button onClick={addToFav}>Add to fav</Button>
        </Card>
      })}
    </>
  )
}

export default SuperheroCard

SuperheroCard.propTypes = {
  superheroes: PropTypes.array,
}