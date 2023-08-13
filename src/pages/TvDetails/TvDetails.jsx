import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import {
  Title,
  MainWrapper,
  MovieDetailsWrapper,
  LinksWrap,
  Overview,
  Span,
  ImageWrapper,
  Poster,
  NoPoster,
} from './TvDetails.styled';
import Button from 'components/Button/Button';
import { getTvDetails } from 'services/tvDetailsAPI';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import Loader from 'components/Loader/Loader';
import { motion } from 'framer-motion';

function TvDetails() {
  const [tv, setTv] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getTvDetails(movieId)
      .then(res => {
        setTv(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, [movieId]);

  if (!tv) {
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
        <Title>{tv?.name}</Title>
        <MainWrapper>
          {/* <div>
            <img
              src={`http://image.tmdb.org/t/p/w300${tv['poster_path']}`}
              alt={tv?.name}
            />
          </div> */}
          <ImageWrapper>
            {tv['poster_path'] ? (
              <Poster
                src={`http://image.tmdb.org/t/p/w300${tv['poster_path']}`}
                alt={tv?.title}
              />
            ) : (
              <NoPoster />
            )}
          </ImageWrapper>
          <MovieDetailsWrapper>
            <p>
              <Span>Rating:</Span> {tv['vote_average']}
            </p>
            <p>
              <Span>First air date:</Span> {tv['first_air_date']}
            </p>
            <p>
              <Span>Last air date:</Span> {tv['last_air_date']}
            </p>
            <p>
              <Span>Number of seasons:</Span> {tv?.number_of_seasons}
            </p>
            <p>
              <Span>Number of episodes:</Span> {tv?.number_of_episodes}
            </p>
            <p>
              <Span>Country:</Span> {tv['origin_country'][0]}
            </p>

            {tv['genres'] && tv['genres'].length > 0 ? (
              <p>
                <Span>Genres:</Span>{' '}
                {tv['genres'].map(genre => genre.name).join(', ')}
              </p>
            ) : null}

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SectionTemplate>
    </motion.div>
  );
}
export default TvDetails;
