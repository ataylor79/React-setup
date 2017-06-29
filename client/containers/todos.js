import { connect } from 'react-redux';
import { loadTodos, toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/list';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  onLoadTodos: () => dispatch(loadTodos()),
  onDoneTodo: (id, status) => dispatch(toggleTodo(id, status)),
  onDeleteTodo: (id) => dispatch(deleteTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
