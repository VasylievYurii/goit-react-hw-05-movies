import {
  CardWrapper,
  ImgWrapper,
  Poster,
  RatingWrap,
  Star,
  Rating,
  Type,
  Title,
  Date,
} from './Card.styled';

function Card({ title, poster, type, rating, date }) {
  return (
    <CardWrapper>
      <ImgWrapper>
        <Poster src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title} />
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
