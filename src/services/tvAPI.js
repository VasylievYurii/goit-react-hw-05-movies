import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = API_BASE_URL;

// TV Shows        https://api.themoviedb.org/3   /trending/tv/day      ?language=en-US
// Search by name: https://api.themoviedb.org/3   /search/tv            ?query=iron&include_adult=false&language=en-US&page=1
// Genres          https://api.themoviedb.org/3   /genre/tv/list
// Top Rated       https://api.themoviedb.org/3   /tv/top_rated
// Tv by genre     https://api.themoviedb.org/3   /discover/tv          ?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc

const TV_API = {
  trending: '/trending/tv/day',
  tvSearch: '/search/tv',
  genres: '/genre/tv/list',
  topRated: '/tv/top_rated',
  tvByGenre: '/discover/tv',
};

export const getTvTrendingList = async () => {
  try {
    const result = await axios.get(TV_API.trending, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvGenres = async () => {
  try {
    const result = await axios.get(TV_API.genres, {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvTopRated = async () => {
  try {
    const result = await axios.get(TV_API.topRated, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvSearch = async (query, page) => {
  try {
    const result = await axios.get(TV_API.tvSearch, {
      params: { query, api_key: API_KEY, language: 'en-US', page },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvByGenre = async (genre, page) => {
  try {
    const result = await axios.get(TV_API.tvByGenre, {
      params: {
        include_null_first_air_dates: false,
        include_adult: false,
        api_key: API_KEY,
        include_video: false,
        language: 'en-US',
        page,
        sort_by: 'popularity.desc',
        with_genres: genre,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
