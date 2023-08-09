import {
  CardWrapper,
  ImgWrapper,
  Poster,
  NoPoster,
  RatingWrap,
  Star,
  Rating,
  Type,
  Title,
  Date,
} from './Card.styled';
import { useLocation } from 'react-router-dom';

function Card({ movieId, title, poster, type, rating, date }) {
  const location = useLocation();

  let path = '';
  if (type === 'movie') {
    path = `/movies/${movieId}`;
  } else {
    path = `/tv/${movieId}`;
  }

  return (
    <CardWrapper to={path} state={{ from: location }}>
      <ImgWrapper>
        {poster ? (
          <Poster src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title} />
        ) : (
          <NoPoster />
        )}

        <RatingWrap>
          <Star />
          <Rating>{rating.toFixed(1)}</Rating>
        </RatingWrap>
        <Type colorType={type}>{type}</Type>
      </ImgWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </CardWrapper>
  );
}
export default Card;
