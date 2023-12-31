import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import {
  Title,
  Tagline,
  MainWrapper,
  MovieDetailsWrapper,
  Overview,
  LinksWrap,
  Span,
  ImageWrapper,
  Poster,
  NoPoster,
} from './MovieDetails.styled';
import { getMoviesDetails } from 'services/moviesDetailsAPI';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import Loader from 'components/Loader/Loader';
import { motion } from 'framer-motion';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMoviesDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <Button>Go Back</Button>
        </Link>
        <Title>{movie?.title}</Title>
        <Tagline>{movie?.tagline}</Tagline>
        <MainWrapper>
          <ImageWrapper>
            {movie['poster_path'] ? (
              <Poster
                src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
                alt={movie?.title}
              />
            ) : (
              <NoPoster />
            )}
          </ImageWrapper>
          <MovieDetailsWrapper>
            {movie['vote_average'] ? (
              <p>
                <Span>Rating:</Span>{' '}
                {Math.round(movie['vote_average'] * 10) / 10}
              </p>
            ) : null}
            {movie['release_date'] ? (
              <p>
                <Span>Release:</Span> {movie['release_date']}
              </p>
            ) : null}

            {movie['production_countries'] ? (
              <p>
                <Span>Country:</Span> {movie['production_countries'][0].name}
              </p>
            ) : null}

            {movie.budget ? (
              <p>
                <Span>Budget:</Span> {movie.budget}
              </p>
            ) : null}

            {movie['genres'] && movie['genres'].length > 0 ? (
              <p>
                <Span>Genres:</Span>{' '}
                {movie['genres'].map(genre => genre.name).join(', ')}
              </p>
            ) : null}
            {movie.runtime ? (
              <p>
                <Span>Runtime:</Span> {movie.runtime} min
              </p>
            ) : null}

            <Overview>{movie?.overview}</Overview>
          </MovieDetailsWrapper>
        </MainWrapper>
      </SectionTemplate>
      <SectionTemplate>
        <LinksWrap>
          <li>
            <Link to="cast">
              <Button>Cast</Button>
            </Link>
          </li>
          <li>
            <Link to="reviews">
              <Button>Reviews</Button>
            </Link>
          </li>
        </LinksWrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SectionTemplate>
    </motion.div>
  );
}
export default MovieDetails;
