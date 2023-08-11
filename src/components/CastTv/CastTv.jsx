import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvCast } from 'services/tvDetailsAPI';
import {
  ActorsWrap,
  ActorWrapper,
  Photo,
  PhotoWrap,
  NoPhoto,
  Name,
  Character,
} from './CastTv.styled';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function CastTv() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getTvCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <TitleTemplate>Cast</TitleTemplate>
      <ActorsWrap>
        {cast.map(actor => (
          <ActorWrapper key={actor.id}>
            <PhotoWrap>
              {actor.profile_path ? (
                <Photo
                  src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <NoPhoto />
              )}
            </PhotoWrap>
            <Name>{actor.name}</Name>
            <Character>{actor.character}</Character>
          </ActorWrapper>
        ))}
      </ActorsWrap>
    </>
  );
}
export default CastTv;
