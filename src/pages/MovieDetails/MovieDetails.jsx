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
} from './MovieDetails.styled';
import { getMoviesDetails } from 'services/moviesDetailsAPI';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import Loader from 'components/Loader/Loader';

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
    <>
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <Button>Go Back</Button>
        </Link>
        <Title>{movie?.title}</Title>
        <Tagline>{movie?.tagline}</Tagline>
        <MainWrapper>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
              alt={movie?.title}
            />
          </div>
          <MovieDetailsWrapper>
            <p>
              <Span>Rating:</Span> {Math.round(movie['vote_average'] * 10) / 10}
            </p>
            <p>
              <Span>Release:</Span> {movie['release_date']}
            </p>
            {movie['production_countries'][0] ? (
              <p>
                <Span>Country:</Span> {movie['production_countries'][0]?.name}
              </p>
            ) : null}

            {movie.budget ? (
              <p>
                <Span>Budget:</Span> {movie.budget}
              </p>
            ) : null}

            <p>
              <Span>Genres:</Span> {movie['genres'][0]?.name}
            </p>
            <p>
              <Span>Runtime:</Span> {movie?.runtime} min
            </p>
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
    </>
  );
}
export default MovieDetails;
