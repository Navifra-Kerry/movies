import React from 'react';
import './Movies.scss';
import { useHistory } from 'react-router-dom';

function Movies() {
  const history = useHistory();
  return (
    <div className="movive-main">
      <section className="cards">
        <div
          className="card"
          onClick={() => {
            history.push(`/movie/${1}`);
          }}
        >
          <div className="card-image-container">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
              alt="Detailed image description would go here."
            />
          </div>
          <div className="card-content">
            <p className="card-title text-medium">
              Here's the Title of an Awesome Course
            </p>
            <div className="card-info">
              <p className="text-medium">30 Min</p>
              <p className="card-price text-medium">Free</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
