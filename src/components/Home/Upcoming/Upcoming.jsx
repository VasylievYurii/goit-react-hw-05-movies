import { useState, useEffect } from 'react';
import useHomeApi from 'services/homeAPI';
import { Link } from 'react-router-dom';
import { Section } from './Upcoming.styled';
import getRandomFromArray from 'scripts/getRandomFromArray';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {
  Autoplay,
  Keyboard,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';

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

  const itemsForHome = useHomeApi();
  useEffect(() => {
    setLoading(true);
    itemsForHome
      .getUpcomingList()
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
              <Link>
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
