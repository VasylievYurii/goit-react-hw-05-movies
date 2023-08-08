import { useState, useEffect } from 'react';
import useActorsApi from 'services/actorsAPI';
import ActorCard from '../ActorCard/ActorCard';
import { TrendingTitle, TrendingList } from './Trending.styled';

function Trending() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const itemsForTrending = useActorsApi();
  useEffect(() => {
    setLoading(true);
    itemsForTrending
      .getTrendingActorsList()
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

  return (
    <div>
      <TrendingTitle>Trending persons</TrendingTitle>
      <TrendingList>
        {array.map(actor => {
          if (!actor['profile_path']) {
            return;
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
