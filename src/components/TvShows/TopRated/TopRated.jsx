import { useState, useEffect } from 'react';
import useTvApi from 'services/tvAPI';
import Card from 'components/Card/Card';
import { TopRatedTitle, TopRatedList } from './TopRated.styled';

function TopRated() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const itemsForTrending = useTvApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTvTopRated()
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
            movieId={movie.id}
            title={movie.title || movie.name}
            poster={movie['poster_path']}
            type="tv"
            rating={movie['vote_average']}
            date={movie['release_date']}
          />
        ))}
      </TopRatedList>
    </div>
  );
}
export default TopRated;
