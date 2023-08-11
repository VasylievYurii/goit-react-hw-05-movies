import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearch } from 'services/moviesAPI';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import Loading from 'components/Loading/Loading';
import SearchingResults from 'components/SearchingResults/SearchingResults';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import {
  Form,
  Label,
  Input,
  ButtonSearch,
  BtnLoadMore,
  Icon,
} from './SearchMovie.styled';

function SearchMovie({ onSubmit }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const cachedFn = useCallback(fn, dependencies);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function updateQuery(newQuery) {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    const debouncedSearch = debounce((query, page) => {
      setLoading(true);
      setError(false);

      getMoviesSearch(query, page)
        .then(({ results }) => {
          if (page === 1) {
            setMovies(results);
          } else {
            setMovies(prevMovies => [...prevMovies, ...results]);
          }
        })
        .catch(err => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          // onSubmit(true);
        });
    }, 300);
    debouncedSearch(query, page);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      onSubmit(false);
      setMovies([]);
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
    } else {
      onSubmit(true);
    }
    setPage(1);
  };

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
    onSubmit(true);
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
          <ButtonSearch type="submit" disabled>
            <Icon />
          </ButtonSearch>
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
        <ButtonSearch type="submit">
          <Icon />
        </ButtonSearch>
      </Form>

      {movies.length > 0 ? (
        <>
          <SearchingResults array={movies} />
          <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
        </>
      ) : null}
    </>
  );
}

export default SearchMovie;
