import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import UseStylesPaginationControl from './UseStylesPaginationControl';

const PaginationControl = ({ totalPages, pageNumber, setPageNumber }) => {

  UseStylesPaginationControl();

  const handlePageChange = (_, num) => {
    setPageNumber(num - 1)
  };

  return (
    <Stack sx={{margin: '20px auto 40px'}} spacing={2}>
      <Pagination 
        count={totalPages || 0}
        page={pageNumber + 1}
        onChange={handlePageChange}
        size={"large"}
        // sx={{color: 'white'}}
        // color={'primary'}
      />
    </Stack>
  )
}

PaginationControl.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
}

export default PaginationControl