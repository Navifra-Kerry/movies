import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes, { IRouter } from '../routers';
import './AppContent.scss';

const Loading = () => {
  return <h1>Loading profile...</h1>;
};

const AppContent = () => {
  return (
    <div className="content">
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route: IRouter, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          <Redirect from="/" to="/movie" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default React.memo(AppContent);
