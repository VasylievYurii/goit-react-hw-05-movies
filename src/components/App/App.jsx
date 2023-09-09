import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
import Home from 'pages/Home';
import Layout from '../Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import CastTv from 'components/CastTv/CastTv';
import ReviewsTv from 'components/ReviewsTv/ReviewsTv';
import { AnimatePresence } from 'framer-motion';

const Movies = lazy(() => import('pages/Movies'));
const TvShows = lazy(() => import('pages/TvShows'));
const Actors = lazy(() => import('pages/Actors'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieGenres = lazy(() => import('pages/MovieGenres/MovieGenres'));
const TvDetails = lazy(() => import('pages/TvDetails/TvDetails'));
const TvGenres = lazy(() => import('pages/TvGenres/TvGenres'));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
            path="movies/genres/:genre"
            element={
              <Suspense fallback={<Loader />}>
                <MovieGenres />
              </Suspense>
            }
          ></Route>

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
            path="tv/genres/:genre"
            element={
              <Suspense fallback={<Loader />}>
                <TvGenres />
              </Suspense>
            }
          ></Route>

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
    </AnimatePresence>
  );
}

export default App;
