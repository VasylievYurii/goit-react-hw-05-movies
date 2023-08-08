import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import TvShows from 'pages/TvShows/TvShows';
import Actors from 'pages/Actors/Actors';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from '../Layout/Layout';
import TvDetails from 'pages/TvDetails/TvDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="tvshows" element={<TvShows />} />
        <Route path="tv/:movieId" element={<TvDetails />} />
        <Route path="actors" element={<Actors />} />
      </Route>
    </Routes>
  );
}

export default App;
