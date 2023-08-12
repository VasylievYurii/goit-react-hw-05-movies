import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTvSearch } from 'services/tvAPI';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import Loading from 'components/Loading/Loading';
import SearchingResultsTv from 'components/SearchingResultsTv/SearchingResultsTv';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import {
  Form,
  Label,
  Input,
  ButtonSearch,
  BtnLoadMore,
  Icon,
} from './SearchTvShow.styled';
import { ThreeDots } from 'react-loader-spinner';

function SearchTvShow({ onSubmit }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaderLoadMore, setLoaderLoadMore] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
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
      if (page === 1) {
        setLoading(true);
      }
      if (page > 1) {
        setLoaderLoadMore(true);
      }

      setError(false);

      getTvSearch(query, page)
        .then(({ results }) => {
          if (page === 1) {
            setTvShows(results);
          } else {
            setTvShows(prevMovies => [...prevMovies, ...results]);
          }
        })
        .catch(err => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          setLoaderLoadMore(false);
        });
    }, 300);
    debouncedSearch(query, page);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, page]);

  const handleLoadMore = () => {
    setLoaderLoadMore(true);
    setPage(prevPage => prevPage + 1);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      onSubmit(false);
      setTvShows([]);
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

      {tvShows.length > 0 ? (
        <>
          <SearchingResultsTv array={tvShows} />
          {!loaderLoadMore ? (
            <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
          ) : (
            <BtnLoadMore>
              <ThreeDots
                height="50"
                width="50"
                radius="9"
                color="#fe6d31"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                  justifyContent: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                wrapperClassName=""
                visible={true}
              />
            </BtnLoadMore>
          )}
        </>
      ) : null}
    </>
  );
}

export default SearchTvShow;
