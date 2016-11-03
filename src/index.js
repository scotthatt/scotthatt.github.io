/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import ImageGrid from './components/ImageGrid';
import ImageDetail from './components/ImageDetail';
import NotFound from './components/NotFound';

import './less/index.less';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

ReactDOM.render((
  <Router history={ history }>
    <Route path='/' component={ App }>
      <IndexRoute component={ ImageGrid } />
      <Route path='/image/:id' component={ ImageDetail } />
      <Route path='*' component={ NotFound } />
    </Route>
  </Router>
), document.getElementById('app'));
