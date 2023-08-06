import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.baseURL = API_BASE_URL;

// MovieDetails:   https://api.themoviedb.org/3/movie/               {movie_id}
// Cast            https://api.themoviedb.org/3/movie/               {movie_id}/credits
// Reviews         https://api.themoviedb.org/3/movie/               {movie_id}/reviews

const getMoviesDetails = async movie_id => {
  try {
    const result = await axios.get(
      { movie_id },
      {
        params: { api_key: API_KEY },
      }
    );
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getMoviesCast = async movie_id => {
  try {
    const result = await axios.get({ movie_id } + '/credits', {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getMoviesReviews = async movie_id => {
  try {
    const result = await axios.get({ movie_id } + '/reviews', {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const useMoviesDetailsApi = () => {
  return {
    getMoviesDetails,
    getMoviesCast,
    getMoviesReviews,
  };
};

export default useMoviesDetailsApi;
