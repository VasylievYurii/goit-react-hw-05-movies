import { useState, useEffect } from 'react';
import useHomeApi from 'services/homeAPI';
import Card from 'components/Card/Card';
import { TrendingTitle } from './Trending.styled';
import ListTemplate from 'components/ListTemplate/ListTemplate';

function Trending() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trendingArray, setTrendingArray] = useState([]);

  const itemsForTrending = useHomeApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTrendingMultiList()
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
  return (
    <>
      <TrendingTitle>Trending list</TrendingTitle>
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
    </>
  );
}
export default Trending;
