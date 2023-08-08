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

function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useMoviesDetailsApi();

  useEffect(() => {
    metodsForMovieDetails
      .getMoviesCast(movieId)
      .then(({ cast }) => {
        console.log('res:', cast);

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
    <ActorsWrap>
      {cast.map(actor => (
        <ActorWrapper>
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
  );
}
export default Cast;
