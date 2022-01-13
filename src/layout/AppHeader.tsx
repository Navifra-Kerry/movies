import React from 'react';
import './AppHeader.scss';
import ConditionalNavLink from '../components/conditionalNavLink/conditionalNavLink';
import { faUpload, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppHeader = () => {
  return (
    <div className="appHeader">
      <div className="appHeader-controls">
        <ul>
          <li className="movies">
            <ConditionalNavLink title="movies" to="/movie" disabled={false}>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </ConditionalNavLink>
          </li>
          <li className="upload">
            <ConditionalNavLink
              title="movies"
              to="/movie/upload"
              disabled={false}
            >
              <FontAwesomeIcon icon={faUpload} size="lg" />
            </ConditionalNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
