import React from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducers from './reducers';
import App from './components/App';

const reduxLogger = createLogger();
const store = createStore(
  appReducers,
  compose(applyMiddleware(thunk, reduxLogger)),
 );

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
