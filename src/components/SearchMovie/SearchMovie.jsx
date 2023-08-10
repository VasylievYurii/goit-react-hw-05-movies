import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getMoviesSearch } from 'services/moviesAPI';
import SearchingResults from 'components/SearchingResults/SearchingResults';
import { Form, Label, Input, Button, Icon } from './SearchMovie.styled';
import { toast } from 'react-toastify';
import Loading from 'components/Loading/Loading';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function SearchMovie({ onSubmit }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function updateQuery(newQuery) {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Searching is empty!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
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

  if (loading) {
    return (
      <>
        <Form>
          <Label>
            <Input
              type="text"
              placeholder="Enter movie"
              value={query}
              onChange={evt => updateQuery(evt.target.value)}
            />
          </Label>
          <Button type="submit" disabled>
            <Icon />
          </Button>
        </Form>
        <TitleTemplate>Searching...</TitleTemplate>
        <Loading />
      </>
    );
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
