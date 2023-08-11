import { useState, useEffect } from 'react';
import { getGenres } from 'services/moviesAPI';
import { GenreList, GenreName } from './GenrePanel.styled';
import { toast } from 'react-toastify';

function GenrePanel() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

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
        {array.map(genre => (
          <GenreName key={genre.id}>{genre.name}</GenreName>
        ))}
      </GenreList>
    </>
  );
}
export default GenrePanel;
