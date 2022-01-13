import { IMovie } from '../models/Movie';
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

export async function CreateMovie(movie: IMovie, form: FormData) {
  try {
    const file = await UploadFile(form);
    const response = await axios.post('/api/movie', {
      title: movie.title,
      content: movie.content,
      imagepath: file.data.filename,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (ex) {
    throw ex;
  }
}

export async function UploadFile(form: FormData) {
  const response = await axios.post('/api/uploads', form);

  return response;
}
