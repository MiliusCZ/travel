import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import Homepage from 'containers/homepage';
import Trip from 'containers/trip';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/trip/:tripId" component={Trip} />
    </Route>
  </Route>
);

export default routes;


