import { useState, useEffect } from 'react';
import useHomeApi from 'services/homeAPI';
import { Link } from 'react-router-dom';
import { UpcomingListUl } from './Upcoming.styled';
import { Section, Container } from './Upcoming.styled';
import getRandomFromArray from 'scripts/getRandomFromArray';

function Upcoming() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [UpcomingList, setUpcomingList] = useState([]);
  const [RandomPoster, setRandomPoster] = useState('');

  const itemsForHome = useHomeApi();
  useEffect(() => {
    setLoading(true);
    itemsForHome
      .getUpcomingList()
      .then(({ results }) => {
        setUpcomingList(results);
        console.log('res', results);
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
    const poster = getRandomFromArray(UpcomingList);
    console.log('UpcomingList:', UpcomingList);
    console.log('poster:', poster);
    setRandomPoster(poster);
  }, [UpcomingList]);

  return (
    <>
      <Section image={RandomPoster}>
        <Container>
          <UpcomingListUl>
            {UpcomingList.map(movie => (
              <li key={movie.id}>
                <Link>
                  <img
                    src={`http://image.tmdb.org/t/p/w300${movie['poster_path']}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </UpcomingListUl>
        </Container>
      </Section>
    </>
  );
}
export default Upcoming;
