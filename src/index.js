import 'assets/styles/index.scss';
import 'jquery/src/jquery.js';
import 'bootstrap-sass/assets/javascripts/bootstrap-sprockets.js';
import 'bootstrap-sass/assets/javascripts/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import routes from 'routes';

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('react')
);
