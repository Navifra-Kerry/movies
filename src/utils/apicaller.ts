import axios from 'axios';
axios.defaults.withCredentials = true;

export async function GetMovies() {
  const response = await axios.get('/api/movie', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}
