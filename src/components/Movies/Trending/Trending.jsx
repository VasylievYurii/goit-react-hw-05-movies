import { useState, useEffect } from 'react';
import useMoviesApi from 'services/moviesAPI';
import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import Loading from 'components/Loading/Loading';
function Trending() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trendingArray, setTrendingArray] = useState([]);

  const itemsForTrending = useMoviesApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTrendingMoviesList()
      .then(({ results }) => {
        setTrendingArray(results);
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
        <TitleTemplate>Trending list...</TitleTemplate>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <TitleTemplate>Trending list</TitleTemplate>
      <ListTemplate>
        {trendingArray.map(movie => (
          <Card
            key={movie.id}
            movieId={movie.id}
            title={movie.title || movie.name}
            poster={movie['poster_path']}
            type={movie['media_type']}
            rating={movie['vote_average']}
            date={movie['release_date']}
          />
        ))}
      </ListTemplate>
    </div>
  );
}
export default Trending;
