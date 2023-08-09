import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearch } from 'services/moviesAPI';
import SearchingResults from 'components/SearchingResults/SearchingResults';
import { Form, Label, Input, Button, Icon } from './SearchMovie.styled';
import { useLocation } from 'react-router-dom';

function SearchMovie({ onSubmit }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  console.log('location movies:', location.pathname);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function updateQuery(newQuery) {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    getMoviesSearch(query)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        onSubmit();
      });
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Label>
          <Input
            type="text"
            placeholder="Enter movie"
            value={query}
            onChange={evt => updateQuery(evt.target.value)}
          />
        </Label>
        <Button type="submit">
          <Icon />
        </Button>
      </Form>

      {movies ? <SearchingResults array={movies} /> : null}
    </>
  );
}

export default SearchMovie;
