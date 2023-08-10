import { useState, useEffect } from 'react';
import useMoviesApi from 'services/moviesAPI';
import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import Loading from 'components/Loading/Loading';

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

  if (loading) {
    return (
      <>
        <TitleTemplate>Now Playing...</TitleTemplate>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <TitleTemplate>Now Playing</TitleTemplate>
      <ListTemplate>
        {array.map(movie => (
          <Card
            key={movie.id}
            movieId={movie.id}
            title={movie.title || movie.name}
            poster={movie['poster_path']}
            type="movie"
            rating={movie['vote_average']}
            date={movie['release_date']}
          />
        ))}
      </ListTemplate>
    </div>
  );
}
export default NowPlaying;
