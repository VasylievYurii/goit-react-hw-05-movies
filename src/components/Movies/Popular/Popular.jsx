import { useState, useEffect } from 'react';
import { getPopular } from 'services/moviesAPI';
import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import Loading from 'components/Loading/Loading';
import { toast } from 'react-toastify';

function Popular() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setLoading(true);

    getPopular()
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
        <TitleTemplate>Popular list...</TitleTemplate>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <TitleTemplate>Popular list</TitleTemplate>
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
export default Popular;
