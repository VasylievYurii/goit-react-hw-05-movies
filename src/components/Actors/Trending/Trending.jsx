import { useState, useEffect } from 'react';
import { getTrendingActorsList } from 'services/actorsAPI';
import ActorCard from '../ActorCard/ActorCard';
import { TrendingTitle, TrendingList } from './Trending.styled';
import { toast } from 'react-toastify';
import Loading from 'components/Loading/Loading';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function Trending() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTrendingActorsList()
      .then(({ results }) => {
        setArray(results);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
        <TitleTemplate>Trending persons...</TitleTemplate>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <TrendingTitle>Trending persons</TrendingTitle>
      <TrendingList>
        {array.map(actor => {
          if (!actor['profile_path']) {
            return [];
          }
          return (
            <ActorCard
              key={actor.id}
              title={actor.name}
              poster={actor['profile_path']}
            />
          );
        })}
      </TrendingList>
    </div>
  );
}
export default Trending;
