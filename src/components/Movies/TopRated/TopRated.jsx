import { useState, useEffect } from 'react';
import useMoviesApi from 'services/moviesAPI';
import Card from 'components/Card/Card';
import { TopRatedTitle, TopRatedList } from './TopRated.styled';

function TopRated() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const itemsForTrending = useMoviesApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTopRated()
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
      <TopRatedTitle>Top Rated</TopRatedTitle>
      <TopRatedList>
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
      </TopRatedList>
    </div>
  );
}
export default TopRated;
