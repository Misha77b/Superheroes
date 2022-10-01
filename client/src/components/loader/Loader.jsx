import React from 'react';
import useStylesLoader from './useStylesLoader';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    useStylesLoader();

  return (
    <div className='loader-wrapper'>
        {/* temporery loader decision */}
        {/* <CircularProgress disableShrink /> */}
        <div className="loader"></div>
    </div>
  )
}

export default Loader