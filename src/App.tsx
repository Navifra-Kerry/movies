import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/" render={(props) => <DefaultLayout />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}
