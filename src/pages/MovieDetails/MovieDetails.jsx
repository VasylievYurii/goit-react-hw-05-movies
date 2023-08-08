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
} from './MovieDetails.styled';
import useMoviesDetailsApi from 'services/moviesDetailsAPI';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useMoviesDetailsApi();

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
          <div>Go Back</div>
          <Title>{movie?.title}</Title>
          <Tagline>{movie.tagline}</Tagline>
          <MainWrapper>
            <ImageWrapper>
              <Poster
                src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
                alt={movie.title}
              />
            </ImageWrapper>
            <MovieDetailsWrapper>
              <Rating>Rating: {movie['vote_average']}</Rating>
              <Release>Release: {movie['release_date']}</Release>
              <Country>
                Country: {movie['production_countries'][0].name}
              </Country>
              <Budget>Budget: {movie.budget}</Budget>
              <Genre>Genres: {movie['genres'][0].name}</Genre>
              <Runtime>Runtime: {movie.runtime}</Runtime>
              <Overview>{movie.overview}</Overview>
            </MovieDetailsWrapper>
          </MainWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul>
            <li>
              <h3>
                <Link to="cast">Cast</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="reviews">Reviews</Link>
              </h3>
            </li>
          </ul>
          <Outlet />
        </Container>
      </Section>
    </>
  );
}
export default MovieDetails;
