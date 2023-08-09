import { useState, useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import {
  Section,
  Container,
  Title,
  Tagline,
  MainWrapper,
  ImageWrapper,
  Poster,
  MovieDetailsWrapper,
  Rating,
  Release,
  Country,
  Budget,
  Genre,
  Runtime,
  Overview,
  LinksWrap,
} from './MovieDetails.styled';
import useMoviesDetailsApi from 'services/moviesDetailsAPI';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useMoviesDetailsApi();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    metodsForMovieDetails
      .getMoviesDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  if (!movie) {
    return;
  }

  return (
    <>
      <Section>
        <Container>
          <Link to={backLinkHref.current}>
            <Button>Go Back</Button>
          </Link>
          <Title>{movie?.title}</Title>
          <Tagline>{movie?.tagline}</Tagline>
          <MainWrapper>
            <ImageWrapper>
              <Poster
                src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
                alt={movie?.title}
              />
            </ImageWrapper>
            <MovieDetailsWrapper>
              <Rating>Rating: {movie['vote_average']}</Rating>
              <Release>Release: {movie['release_date']}</Release>
              <Country>
                Country: {movie['production_countries'][0]?.name}
              </Country>
              {movie.budget ? <Budget>Budget: {movie.budget}</Budget> : null}

              <Genre>Genres: {movie['genres'][0]?.name}</Genre>
              <Runtime>Runtime: {movie?.runtime} min</Runtime>
              <Overview>{movie?.overview}</Overview>
            </MovieDetailsWrapper>
          </MainWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
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
          <Outlet />
        </Container>
      </Section>
    </>
  );
}
export default MovieDetails;
