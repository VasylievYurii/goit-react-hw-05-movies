import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Section,
  Container,
  Title,
  MainWrapper,
  ImageWrapper,
  Poster,
  MovieDetailsWrapper,
  Rating,
  FirstRelease,
  LastRelease,
  Country,
  NumberOfSeasons,
  NumberOfEpisodes,
  Genre,
  Runtime,
  Overview,
} from './TvDetails.styled';
import useTvDetailsApi from 'services/tvDetailsAPI';

function TvDetails() {
  const [tv, setTv] = useState(null);
  const { movieId } = useParams();
  const metodsForTvDetails = useTvDetailsApi();

  useEffect(() => {
    metodsForTvDetails
      .getTvDetails(movieId)
      .then(res => {
        console.log('tvres:', res);
        setTv(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  if (!tv) {
    return;
  }

  return (
    <>
      <Section>
        <Container>
          <div>Go Back</div>

          <Title>{tv.name}</Title>
          <MainWrapper>
            <ImageWrapper>
              <Poster
                src={`http://image.tmdb.org/t/p/w300${tv['poster_path']}`}
                alt={tv.name}
              />
            </ImageWrapper>
            <MovieDetailsWrapper>
              <Rating>Rating: {tv['vote_average']}</Rating>
              <FirstRelease>
                First air date: {tv['first_air_date']}
              </FirstRelease>
              <LastRelease>Last air date: {tv['last_air_date']}</LastRelease>
              <NumberOfSeasons>
                Number of seasons: {tv.number_of_seasons}
              </NumberOfSeasons>
              <NumberOfEpisodes>
                Number of episodes: {tv.number_of_episodes}
              </NumberOfEpisodes>
              <Country>Country: {tv['production_countries'][0].name}</Country>

              <Genre>Genres: {tv['genres'][0].name}</Genre>

              <Overview>{tv.overview}</Overview>
            </MovieDetailsWrapper>
          </MainWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <div>Cast</div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div>Reviews</div>
        </Container>
      </Section>
    </>
  );
}
export default TvDetails;
