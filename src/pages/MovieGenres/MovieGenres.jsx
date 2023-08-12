import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import {} from './MovieGenres.styled';
import { getMoviesByGenre } from 'services/moviesAPI';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import Card from 'components/Card/Card';
import { BtnLoadMore } from 'components/SearchMovie/SearchMovie.styled';
import { ThreeDots } from 'react-loader-spinner';
import GenrePanel from 'components/Movies/GenrePanel/GenrePanel';
// import Loader from 'components/Loader/Loader';

function MovieGenres() {
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [prevGenre, setPrevGenre] = useState('');
  const { genre } = useParams();
  const [loaderLoadMore, setLoaderLoadMore] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  if (genre !== prevGenre) {
    setPage(1);
    setMovie(null);
    setPrevGenre(genre);
  }
  useEffect(() => {
    getMoviesByGenre(genre, page)
      .then(({ results }) => {
        if (page === 1) {
          setMovie(results);
        } else {
          setMovie(prevMovies => [...prevMovies, ...results]);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoaderLoadMore(false);
      });
  }, [genre, page]);

  const handleLoadMore = () => {
    setLoaderLoadMore(true);
    setPage(prevPage => prevPage + 1);
  };

  if (!movie) {
    return;
  }
  return (
    <>
      <GenrePanel />
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <Button>Go Back</Button>
        </Link>
      </SectionTemplate>
      <SectionTemplate>
        {/* <TitleTemplate title={}/> */}
        <ListTemplate>
          {movie.map((movie, index) => (
            <Card
              key={movie.id - index}
              movieId={movie.id}
              title={movie.title || movie.name}
              poster={movie['poster_path']}
              type={'movie'}
              rating={movie['vote_average']}
              date={movie['release_date']}
            />
          ))}
        </ListTemplate>
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
      </SectionTemplate>
    </>
  );
}
export default MovieGenres;
