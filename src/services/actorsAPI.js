import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = API_BASE_URL;

// People          https://api.themoviedb.org/3   /trending/person/day  ?language=en-US
// Search by name: https://api.themoviedb.org/3   /search/person        ?query=iron&include_adult=false&language=en-US&page=1
// Popular         https://api.themoviedb.org/3   /person/popular
// Details         https://api.themoviedb.org/3   /person/              {person_id}

const ACTORS_API = {
  trending: '/trending/person/day',
  // peopleSearch: '/search/person',
  // popular: '/person/popular',
  // person: '/person/',
};

export const getTrendingActorsList = async () => {
  try {
    const result = await axios.get(ACTORS_API.trending, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// export const getPopularActors = async () => {
//   try {
//     const result = await axios.get(ACTORS_API.popular, {
//       params: { api_key: API_KEY, language: 'en-US' },
//     });
//     return result.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// export const getActorSearch = async query => {
//   try {
//     const result = await axios.get(ACTORS_API.peopleSearch, {
//       params: {
//         query: { query },
//         api_key: API_KEY,
//         language: 'en-US',
//         page: 1,
//       },
//     });
//     return result.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// export const getActorDetails = async person_id => {
//   try {
//     const result = await axios.get(
//       { person_id },
//       {
//         params: { api_key: API_KEY },
//       }
//     );
//     return result.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };
