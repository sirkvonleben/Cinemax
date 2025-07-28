import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
// … otros imports

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'movie/:id', element: <MovieDetails /> },
      // … más rutas hijas
    ]
  },
  // aquí podrías tener un AuthLayout para `/login`, `/register`, etc.
];

export default routes;