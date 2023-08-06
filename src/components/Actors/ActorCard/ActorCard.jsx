import { CardWrapper, ImgWrapper, Poster, Title } from './ActorCard.styled';

function ActorCard({ title, poster }) {
  return (
    <CardWrapper>
      <ImgWrapper>
        <Poster src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title} />
      </ImgWrapper>
      <Title>{title}</Title>
    </CardWrapper>
  );
}
export default ActorCard;
