import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import {} from './MovieGenres.styled';
import { getTvByGenre } from 'services/tvAPI';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import Card from 'components/Card/Card';
import { BtnLoadMore } from 'components/SearchTvShow/SearchTvShow.styled';
import { ThreeDots } from 'react-loader-spinner';
import GenrePanel from 'components/TvShows/GenrePanel/GenrePanel';
import { getTvGenres } from 'services/tvAPI';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
// import Loader from 'components/Loader/Loader';

function TvGenres() {
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [prevGenre, setPrevGenre] = useState('');
  const [array, setArray] = useState([]);
  const [title, setTitle] = useState('');
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
    if (array.length > 0) {
      const selectedGenre = array.find(ob => ob.id === parseInt(genre));
      if (selectedGenre) {
        setTitle(selectedGenre.name);
      }
    }
  }, [array, genre]);

  useEffect(() => {
    getTvGenres()
      .then(({ genres }) => {
        setArray(genres);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    getTvByGenre(genre, page)
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenrePanel />
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <Button>Go Back</Button>
        </Link>
      </SectionTemplate>
      <SectionTemplate>
        <TitleTemplate>{title}</TitleTemplate>
        <ListTemplate>
          {movie.map((movie, index) => (
            <Card
              key={movie.id - index}
              movieId={movie.id}
              title={movie.title || movie.name}
              poster={movie['poster_path']}
              type={'tv'}
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
    </motion.div>
  );
}
export default TvGenres;
