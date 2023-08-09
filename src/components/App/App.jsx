import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';

import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import TvShows from 'pages/TvShows/TvShows';
// import Actors from 'pages/Actors/Actors';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import TvDetails from 'pages/TvDetails/TvDetails';

import Layout from '../Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import CastTv from 'components/CastTv/CastTv';
import ReviewsTv from 'components/ReviewsTv/ReviewsTv';

// const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const TvShows = lazy(() => import('pages/TvShows/TvShows'));
const Actors = lazy(() => import('pages/Actors/Actors'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const TvDetails = lazy(() => import('pages/TvDetails/TvDetails'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="tvshows"
          element={
            <Suspense fallback={<Loader />}>
              <TvShows />
            </Suspense>
          }
        />

        <Route
          path="tv/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <TvDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<CastTv />} />
          <Route path="reviews" element={<ReviewsTv />} />
        </Route>

        <Route
          path="actors"
          element={
            <Suspense fallback={<Loader />}>
              <Actors />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
