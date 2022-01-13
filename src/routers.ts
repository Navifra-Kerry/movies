import React from 'react';

const Movies = React.lazy(() => import('./views/movies/Movies'));
const Movie = React.lazy(() => import('./views/movies/Movie'));
const Upload = React.lazy(() => import('./views/upload/Upload'));

export interface IRouter {
  path: string;
  name: string;
  exact?: boolean;
  component?: any;
}
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/movie', exact: true, name: 'Home', component: Movies },
  { path: '/movie/upload', exact: true, name: 'Home', component: Upload },
  { path: '/movie/:id', name: 'Home', component: Movie },
];

export default routes;
