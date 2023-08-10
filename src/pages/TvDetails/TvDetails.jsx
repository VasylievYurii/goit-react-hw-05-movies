import { useState, useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import {
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
  LinksWrap,
  Overview,
} from './TvDetails.styled';
import Button from 'components/Button/Button';
import useTvDetailsApi from 'services/tvDetailsAPI';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function TvDetails() {
  const [tv, setTv] = useState(null);
  const { movieId } = useParams();
  const metodsForTvDetails = useTvDetailsApi();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    metodsForTvDetails
      .getTvDetails(movieId)
      .then(res => {
        console.log('res:', res);
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
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <Button>Go Back</Button>
        </Link>
        <Title>{tv?.name}</Title>
        <MainWrapper>
          <ImageWrapper>
            <Poster
              src={`http://image.tmdb.org/t/p/w300${tv['poster_path']}`}
              alt={tv?.name}
            />
          </ImageWrapper>
          <MovieDetailsWrapper>
            <Rating>Rating: {tv['vote_average']}</Rating>
            <FirstRelease>First air date: {tv['first_air_date']}</FirstRelease>
            <LastRelease>Last air date: {tv['last_air_date']}</LastRelease>
            <NumberOfSeasons>
              Number of seasons: {tv?.number_of_seasons}
            </NumberOfSeasons>
            <NumberOfEpisodes>
              Number of episodes: {tv?.number_of_episodes}
            </NumberOfEpisodes>
            <Country>Country: {tv['origin_country'][0]}</Country>

            <Genre>Genres: {tv['genres'][0]?.name}</Genre>

            <Overview>{tv?.overview}</Overview>
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
        <Outlet />
      </SectionTemplate>
    </>
  );
}
export default TvDetails;
