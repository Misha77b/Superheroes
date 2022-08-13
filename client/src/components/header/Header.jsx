import React, { useState } from 'react'
import UseStylesHeader from './UseStylesHeader';
import Button from '@mui/material/Button';
import CreateSuperheroModal from '../modal/CreateSuperheroModal';

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
              position: 'absolute',
              right: '0'
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