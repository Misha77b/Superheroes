import React, { useState } from 'react'
import UseStylesHeader from './UseStylesHeader';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CreateSuperheroModal from '../modal/CreateSuperheroModal';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Profile and login
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
          >
            <HomeRoundedIcon sx={{ fontSize: 35, color: '#A99E84' }} />
          </Button>
          <Button
            className='fav-btn'
            component={Link}
            to={`/favorites`} 
          >
            <FavoriteIcon sx={{ fontSize: 35, color: '#A99E84' }} />
          </Button>
        </div>
        <h2 className="header-logo-title">Superheroes</h2>
        <div className='header-create-and-profile'>
          <Button
              onClick={handleOpen}
              className='header-btn'
              sx={{
                border: '2px solid #A99E84',
                background: 'transparent',
                color: '#A99E84',
                borderRadius: '5px',
              }}
          > 
            Create Superhero
          </Button>
          {/* profile and login */}
          <AccountCircleIcon sx={{ fontSize: 35, color: '#A99E84' }} />
        </div>
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