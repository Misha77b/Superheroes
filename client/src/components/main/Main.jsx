import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Routes
} from "react-router-dom";
import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';
import SuperheroList from '../superheroList/SuperheroList';
import SuperheroPage from '..//superheroPage/SuperheroPage';
import EditSuperheroPage from '../editSuperheroPage/EditSuperheroPage';

const Main = () => {
  const dispatch = useDispatch(); 

  const superheroes = useSelector((state) => state.superheroesReducer.superheroes);

  const routes = [
    {
      path: "/",
      main: () => <SuperheroList superheroes={superheroes} />,
    },
    {
      path: "/view/:pageId",
      main: () => <SuperheroPage />,
    },
    {
      path: "/edit/:pageId",
      main: () => <EditSuperheroPage />,
    }
  ]; 

  useEffect(() => {
    dispatch(getSuperheroes());
  }, []);

  console.log(superheroes);

  return (
    <div>
    <Routes>
        {routes.map(({ path, main }) => (
          <Route key={path} path={path} element={main()} />
        ))}
      </Routes>
    </div>
  )
}

export default Main