import { useState, useEffect } from 'react';
import { getUpcomingList } from 'services/homeAPI';
import { Link } from 'react-router-dom';
import { Section } from './Upcoming.styled';
import getRandomFromArray from 'scripts/getRandomFromArray';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { toast } from 'react-toastify';
import { Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';

function Upcoming() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [UpcomingList, setUpcomingList] = useState([]);
  const [RandomPoster, setRandomPoster] = useState('');
  const [loopActive, setLoopActive] = useState(false);

  const swiperParams = { loop: loopActive };

  useEffect(() => {
    if (!loopActive) {
      const loopTimeout = setTimeout(() => {
        setLoopActive(true);
      }, 6000);
      return () => clearTimeout(loopTimeout);
    }
  }, [loopActive]);

  useEffect(() => {
    setLoading(true);

    getUpcomingList()
      .then(({ results }) => {
        setUpcomingList(results);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (UpcomingList.length === 0) {
      return;
    }
    const poster = getRandomFromArray(UpcomingList);
    setRandomPoster(poster);
  }, [UpcomingList]);

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
      <Section image={RandomPoster}>
        <Swiper
          {...swiperParams}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Keyboard, EffectCoverflow]}
          initialSlide={9}
          className="mySwiper"
        >
          {UpcomingList.map(movie => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
                  alt={movie.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
}
export default Upcoming;
