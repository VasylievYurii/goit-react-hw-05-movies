import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMoviesDetailsApi from 'services/moviesDetailsAPI';
import {
  ActorsWrap,
  ActorWrapper,
  Photo,
  PhotoWrap,
  NoPhoto,
  Name,
  Character,
} from './Cast.styled';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useMoviesDetailsApi();

  useEffect(() => {
    metodsForMovieDetails
      .getMoviesCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

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
export default Cast;
