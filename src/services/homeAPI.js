import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = API_BASE_URL;
// Home:
// Multi search:   https://api.themoviedb.org/3   /search/multi         ?query=iron&include_adult=false&language=en-US&page=1
// Upcoming:       https://api.themoviedb.org/3   /movie/upcoming
//                 https://api.themoviedb.org/3   /trending/all/day     ?language=en-US

const HOME_API = {
  trending: '/trending/all/day',
  upcoming: '/movie/upcoming',
  // multiSearch: '/search/multi',
};

export const getTrendingMultiList = async () => {
  try {
    const result = await axios.get(HOME_API.trending, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getUpcomingList = async () => {
  try {
    const result = await axios.get(HOME_API.upcoming, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// export const getSearchingItem = async query => {
//   try {
//     const result = await axios.get(HOME_API.multiSearch, {
//       params: { query },
//     });
//     return result.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };
