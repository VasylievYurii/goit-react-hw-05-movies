import {
  CardWrapper,
  ImgWrapper,
  Poster,
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
        <Rating>{rating.toFixed(1)}</Rating>
        <Type colorType={type}>{type}</Type>
      </ImgWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </CardWrapper>
  );
}
export default Card;
