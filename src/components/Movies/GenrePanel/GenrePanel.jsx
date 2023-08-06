import { useState, useEffect } from 'react';
import useMoviesApi from 'services/moviesAPI';
import { GenreList, GenreName } from './GenrePanel.styled';

function GenrePanel() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const itemsForTrending = useMoviesApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getGenres()
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
