import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import Favorites from '../favorites/Favorites'
import SuperheroList from '../superheroList/SuperheroList';
import SuperheroPage from '..//superheroPage/SuperheroPage';
import EditSuperheroPage from '../editSuperheroPage/EditSuperheroPage';

const Main = () => {

  const routes = [
    {
      path: "/",
      main: () => <SuperheroList />,
    },
    {
      path: "/favorites",
      main: () => <Favorites />,
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