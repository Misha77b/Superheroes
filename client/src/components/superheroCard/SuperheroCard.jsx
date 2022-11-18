import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useStylesSuperheroCard from './useStylesSuperheroCard';
import { viewBtn } from './btnsStyle/viewBtnStyle';
import { deleteBtn } from './btnsStyle/deleteBtnStyle';

import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardMedia, 
  CardContent, 
  Typography, 
  IconButton, 
  Button, 
  Box 
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link } from "react-router-dom";

import { deleteSuperheroe } from '../../API/superheroes/superheroes.thunks';
// import { addToFavorite } from '../../API/favorites/favorites.thunks';

const SuperheroCard = ({superheroes}) => {
  useStylesSuperheroCard();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteSuperheroe(id));
  }

  // const addToFav = (e) => {
  //   const id = e.target.id;
  //   dispatch(addToFavorite(id))
  // }
  
  return (
    <>
      {superheroes.map((superheroe) => {
        return <Card sx={{width: 345, margin: '20px', background: '#272933', borderRadius: '10px'}} className='superhero-card' key={superheroe._id}>
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
            sx={{display: 'flex', justifyContent: 'space-between', margin: '0 10px'}}
          >
            <Box component="div" sx={{display: 'flex', gap: '20px'}}>
              <Button
                className='card-actrion-btns view-btn'
                component={Link}
                id={superheroe._id}
                to={`/view/${superheroe._id}`}
                sx={viewBtn}
                variant='contained'
              >
                View
              </Button>
              <Button
                className='card-actrion-btns delete_btn'
                onClick={handleDelete}
                id={superheroe._id}
                sx={deleteBtn}
              >
                Delete
              </Button>
            </Box>
            {/* Add to fav btn */}
            <IconButton>
              <FavoriteBorderIcon /> {/* <FavoriteIcon /> */}
            </IconButton>
          </CardActions>
          {/* <Button onClick={addToFav}>Add to fav</Button> */}
        </Card>
      })}
    </>
  )
}

export default SuperheroCard

SuperheroCard.propTypes = {
  superheroes: PropTypes.array,
}