import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = API_BASE_URL;

// Movie: trending https://api.themoviedb.org/3   /trending/movie/day   ?language=en-US
// Genres:         https://api.themoviedb.org/3   /genre/movie/list
// Search by name: https://api.themoviedb.org/3   /search/movie         ?query=iron&include_adult=false&language=en-US&page=1
// Top Rated:      https://api.themoviedb.org/3   /movie/top_rated
// Popular:        https://api.themoviedb.org/3   /movie/popular
// Now Playing:    https://api.themoviedb.org/3   /movie/now_playing
// movieByGenre    https://api.themoviedb.org/3   /discover/movie       ?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28

const MOVIES_API = {
  trending: '/trending/movie/day',
  genres: '/genre/movie/list',
  movieByGenre: '/discover/movie',
  moviesSearch: '/search/movie',
  topRated: '/movie/top_rated',
  popular: '/movie/popular',
  nowPlaying: '/movie/now_playing',
};

export const getTrendingMoviesList = async () => {
  try {
    const result = await axios.get(MOVIES_API.trending, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getGenres = async () => {
  try {
    const result = await axios.get(MOVIES_API.genres, {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTopRated = async () => {
  try {
    const result = await axios.get(MOVIES_API.topRated, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPopular = async () => {
  try {
    const result = await axios.get(MOVIES_API.popular, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getNowPlaying = async () => {
  try {
    const result = await axios.get(MOVIES_API.nowPlaying, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getMoviesSearch = async (query, page) => {
  try {
    const result = await axios.get(MOVIES_API.moviesSearch, {
      params: { query, api_key: API_KEY, language: 'en-US', page },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getMoviesByGenre = async (genre, page) => {
  try {
    const result = await axios.get(MOVIES_API.movieByGenre, {
      params: {
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
