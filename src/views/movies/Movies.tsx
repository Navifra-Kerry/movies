import React, { useEffect, useState } from 'react';
import './Movies.scss';
import { IMovie } from '../../models/Movie';
import { useHistory } from 'react-router-dom';
import * as apiCaller from '../../utils/apicaller';

function Movies() {
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoivesInfo(); // <-- pass the component props
  }, []);

  const getMoivesInfo = async () => {
    const movies = await apiCaller.GetMovies();
    setMovies(movies.data);
  };

  return (
    <div className="movives-main">
      <section className="cards">
        {movies.map((m: IMovie) => {
          return (
            <div
              className="card"
              onClick={() => {
                history.push(`/movie/${m.id}`);
              }}
            >
              <div className="card-image-container">
                <img src={`/api/uploads/${m.imagepath}`} alt="image" />
              </div>
              <div className="card-content">
                <p className="card-title text-medium">{m.title}</p>
                <div className="card-info">
                  <p className="card-price text-medium">Free</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Movies;
