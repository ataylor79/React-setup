import React from 'react';
import Form from '../containers/form';
import VisibleTodoList from '../containers/todos';

import './styles.css';

const TodoList = () => (
  	<div className="container">
      <Form />
      <VisibleTodoList />
    </div>
  )

export default TodoList;
