import { useState, useEffect } from 'react';
import { getGenres } from 'services/moviesAPI';
import { GenreList, GenreName } from './GenrePanel.styled';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function GenrePanel() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    getGenres()
      .then(({ genres }) => {
        setArray(genres);
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
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <GenreList>
        {array.map(({ id, name }) => (
          <GenreName
            key={id}
            to={`/movies/genres/${id}`}
            state={{ from: location }}
          >
            {name}
          </GenreName>
        ))}
      </GenreList>
    </>
  );
}
export default GenrePanel;
