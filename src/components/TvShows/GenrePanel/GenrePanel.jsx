import { useState, useEffect } from 'react';
import { getTvGenres } from 'services/tvAPI';
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

    getTvGenres()
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
        {array.map(({ id, name }) => {
          const randomDate = new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          );
          return (
            <GenreName
              key={id * randomDate.getTime()}
              to={`/tv/genres/${id}`}
              state={{ from: location }}
            >
              {name}
            </GenreName>
          );
        })}
      </GenreList>
    </>
  );
}
export default GenrePanel;
