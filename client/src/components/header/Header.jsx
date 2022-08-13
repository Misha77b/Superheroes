import React, { useState } from 'react'
import UseStylesHeader from './UseStylesHeader';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CreateSuperheroModal from '../modal/CreateSuperheroModal';
import HomeIcon from './HomeIcon';

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
        <Button
          className='home-btn'
          component={Link}
          to={`/`} 
          sx={{
            margin: '10px 50px'
          }}
        >
          <HomeIcon />
        </Button>
        <h2 className="header-logo-title">Superheroes</h2>
        <Button
            onClick={handleOpen}
            className='header-btn'
            sx={{
              margin: '10px 50px',
              border: '2px solid #2D2D2D',
              background: 'transparent',
              color: '#2D2D2D',
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