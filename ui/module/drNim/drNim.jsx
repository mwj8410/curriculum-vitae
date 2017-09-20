import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

/* Views */
import DashboardView from './views/dashboard.view.jsx';

/* Styles */
import 'Style/global.scss';
import './drNim.style.scss';

// Global State Configuration
import { combineReducers, createStore } from 'redux';

// Reducers
import Profile from '../../service/reducers/profile.reducer';
const store = createStore(
  combineReducers({ Profile })
);

window.store = store; // For local development testing

render(
  (
    <Provider store={store}>
      <BrowserRouter onUpdate={ () => window.scrollTo(0, 0) } basename='/module/drNim'>
        <div>
          <Route exact path='/' component={ DashboardView } />
          <Route exact path='/dashboard' component={ DashboardView } />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.querySelector('#application')
);
