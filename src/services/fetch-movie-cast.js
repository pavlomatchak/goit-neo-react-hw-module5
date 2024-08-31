import axios from 'axios';
import { API_TOKEN } from '../config';

export const fetchMovieCast = async (movieId) => {
  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  };

  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
};
