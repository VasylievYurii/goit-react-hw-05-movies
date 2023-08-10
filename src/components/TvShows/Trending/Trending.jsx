import { useState, useEffect } from 'react';
import useTvApi from 'services/tvAPI';
import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function Trending() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trendingArray, setTrendingArray] = useState([]);

  const itemsForTrending = useTvApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTvTrendingList()
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
