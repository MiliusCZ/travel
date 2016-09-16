import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Home } from 'components';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Route>
);

export default routes;


