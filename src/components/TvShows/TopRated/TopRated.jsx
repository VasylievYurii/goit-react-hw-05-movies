import { useState, useEffect } from 'react';
import useTvApi from 'services/tvAPI';
import Card from 'components/Card/Card';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import Loading from 'components/Loading/Loading';
import { toast } from 'react-toastify';

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

  if (error) {
    toast.error('Sorry for the inconvenience! Try again later.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  if (loading) {
    return (
      <>
        <TitleTemplate>Top Rated...</TitleTemplate>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <TitleTemplate>Top Rated</TitleTemplate>
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
