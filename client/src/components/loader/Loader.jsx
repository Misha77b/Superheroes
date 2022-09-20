import React from 'react';
import useStylesLoader from './useStylesLoader';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    useStylesLoader();

  return (
    <div className='loader'>
        {/* temporery loader decision */}
        <CircularProgress disableShrink />
    </div>
  )
}

export default Loader