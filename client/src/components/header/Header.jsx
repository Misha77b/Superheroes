import React, { useState } from 'react'
import UseStylesHeader from './UseStylesHeader';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CreateSuperheroModal from '../modal/CreateSuperheroModal';
import HomeIcon from './HomeIcon';
import FavIcon from './FavIcon';

const Header = () => {
  UseStylesHeader();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='header'>
        <div className='header-nav-icons'>
          <Button
            className='home-btn'
            component={Link}
            to={`/`} 
            // sx={{
            //   margin: '10px 50px'
            // }}
          >
            <HomeIcon />
          </Button>
          <Button
            className='fav-btn'
            component={Link}
            to={`/favorites`} 
            // sx={{
            //   margin: '10px 50px'
            // }}
          >
            <FavIcon />
          </Button>
        </div>
        <h2 className="header-logo-title">Superheroes</h2>
        <Button
            onClick={handleOpen}
            className='header-btn'
            sx={{
              margin: '10px 50px',
              border: '2px solid #A99E84',
              background: 'transparent',
              color: '#A99E84',
              borderRadius: '5px',
            }}
        > 
          Create Superhero
        </Button>
      </div>
      {open && 
        <CreateSuperheroModal 
          open={open}
          handleClose={handleClose}
        />
      }
    </>
  )
}

export default Header