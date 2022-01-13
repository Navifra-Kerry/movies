import React from 'react';
import './AppHeader.scss';
import ConditionalNavLink from '../components/conditionalNavLink/conditionalNavLink';

const AppHeader = () => {
  return (
    <div className="appHeader">
      <div className="appHeader-controls">
        <ul>
          <li className="movies">
            <ConditionalNavLink title="movies" to="/movie" disabled={false}>
              <i className="bi bi-film" role="img" aria-label="movies"></i>
            </ConditionalNavLink>
          </li>
          <li className="upload">
            <ConditionalNavLink
              title="movies"
              to="/movie/upload"
              disabled={false}
            >
              <i
                className="bi bi-cloud-arrow-up"
                role="img"
                aria-label="upload"
              ></i>
            </ConditionalNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
