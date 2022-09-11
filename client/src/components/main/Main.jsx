import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Routes
} from "react-router-dom";
import { getSuperheroes } from '../../API/superheroes/superheroes.thunks';
import SuperheroList from '../superheroList/SuperheroList';
import SuperheroPage from '..//superheroPage/SuperheroPage';
import EditSuperhero from '../editSuperhero/EditSuperhero';

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
      main: () => <SuperheroPage superheroes={superheroes} />,
    },
    {
      path: "/edit/:pageId",
      main: () => <EditSuperhero superheroes={superheroes} />,
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