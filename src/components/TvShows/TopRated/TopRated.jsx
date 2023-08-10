import { useState, useEffect } from 'react';
import useTvApi from 'services/tvAPI';
import Card from 'components/Card/Card';
import { TopRatedTitle } from './TopRated.styled';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ListTemplate from 'components/ListTemplate/ListTemplate';

function TopRated() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);
  // const location = useLocation();

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
      <ListTemplate>
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
      </ListTemplate>
    </div>
  );
}
export default TopRated;
