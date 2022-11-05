import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControl = ({ totalPages, pageNumber, setPageNumber }) => {

  return (
    <Stack spacing={2}>
        <Pagination 
          count={totalPages || 0}
          page={pageNumber + 1}
          onChange={(_, num) => setPageNumber(num - 1)}
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