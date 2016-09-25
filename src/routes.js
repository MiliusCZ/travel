import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';

export const routes = (
  <Route>
    <Route path="/:tripId" component={App} />
  </Route>
);

export default routes;


