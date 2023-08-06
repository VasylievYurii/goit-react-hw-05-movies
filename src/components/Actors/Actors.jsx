import { useState, useEffect } from 'react';
import useHomeApi from 'services/homeAPI';

function Actors() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trendingMultiList, setTrendingMultiList] = useState([]);

  const itemsForHome = useHomeApi();
  // useEffect(() => {
  //   setLoading(true);
  //   itemsForHome
  //     .getTrendingMultiList()
  //     .then(({ results }) => {
  //       setTrendingMultiList(results);
  //       console.log('res', results);
  //       console.log('trendingMultiList', trendingMultiList);
  //     })
  //     .catch(err => {
  //       setError(true);
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [trendingMultiList, itemsForHome]);
  return <div></div>;
}
export default Actors;
