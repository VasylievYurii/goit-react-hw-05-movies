import axios from 'axios';

const API_KEY = 'c7dd7652c2a2bbf7bac5e128508653f3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = API_BASE_URL;

// TvDetails:      https://api.themoviedb.org/3/tv/               {series_id}
// Cast            https://api.themoviedb.org/3/tv/               {series_id}/credits
// Reviews         https://api.themoviedb.org/3/tv/               {series_id}/reviews

export const getTvDetails = async series_id => {
  try {
    const result = await axios.get(`/tv/${series_id}`, {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvCast = async series_id => {
  try {
    const result = await axios.get(`/tv/${series_id}/credits`, {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTvReviews = async series_id => {
  try {
    const result = await axios.get(`/tv/${series_id}/reviews`, {
      params: { api_key: API_KEY },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
