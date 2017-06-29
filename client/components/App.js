import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';
import Detail from '../containers/details';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route path="/details/:id" component={Detail} />
    </Switch>
  </div>
);

export default App;
