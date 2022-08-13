import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperheroList from '../superheroList/SuperheroList';

const Main = () => {

  return (
    <div>
      <SuperheroList />
    </div>
  )
}

export default Main

