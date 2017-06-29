import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch, IndexRoute } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadTodos } from './actions';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(
  todoApp,
  compose(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
