import { useState, useEffect } from 'react';
import useMoviesApi from 'services/moviesAPI';
import Card from 'components/Card/Card';
import { NowPlayingTitle, NowPlayingList } from './NowPlaying.styled';

function NowPlaying() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const itemsForTrending = useMoviesApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getNowPlaying()
      .then(({ results }) => {
        setArray(results);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NowPlayingTitle>Now Playing</NowPlayingTitle>
      <NowPlayingList>
        {array.map(movie => (
          <Card
            key={movie.id}
            title={movie.title || movie.name}
            poster={movie['poster_path']}
            type="movie"
            rating={movie['vote_average']}
            date={movie['release_date']}
          />
        ))}
      </NowPlayingList>
    </div>
  );
}
export default NowPlaying;
