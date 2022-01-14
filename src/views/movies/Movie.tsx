import React, { useEffect, useState } from 'react';
import { IMovie } from '../../models/Movie';
import './Movie.scss';
import * as apiCaller from '../../utils/apicaller';

function Movie(props: any) {
  const [movieInfo, setMovieInfo] = useState<IMovie>({});

  useEffect(() => {
    getMoiveInfo(props); // <-- pass the component props
  }, []);

  const getMoiveInfo = async (props: any) => {
    const { id } = props.match.params;
    const movie = await apiCaller.GetMovie(+id);
    setMovieInfo(movie.data);
  };

  if (!movieInfo.createdAt) return <></>;

  return (
    <div className="movive-main">
      <section className="container d-flex justify-content-center align-items-center">
        <div className="image-container">
          <img
            src={`/api/uploads/${movieInfo.imagepath}`}
            alt="Detailed image description would go here."
          />
        </div>
        <div className="container gap-2 d-flex flex w-50 m-0 h-100 justify-content-start align-items-center">
          <ul>
            <li>No</li>
            <li>Title</li>
            <li>Descrition</li>
            <li>createdAt</li>
          </ul>
          <div className="movieinfo">
            <ul>
              <li>{movieInfo.id}</li>
              <li>{movieInfo.title}</li>
              <li>{movieInfo.content}</li>
              <li>
                {new Date(movieInfo.createdAt).toLocaleString('kr', {
                  timeZone: 'asia/seoul',
                })}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;
