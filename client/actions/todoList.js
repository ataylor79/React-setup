import axios from 'axios';
import * as actionType from './actionTypes';

const API_URL = 'http://5924a7a63d82370011e6b6ff.mockapi.io/todos';
let nextTodoId = 0;

const todoActioner = (data, type) => Object.assign({}, data, { type });
const getNextID = data => parseInt(data[data.length - 1].id) + 1;
const todoRequest = ({method, uri, payload }) => axios[method](`${API_URL}${uri}`, payload);

export const loadTodos = () => {
  return dispatch => todoRequest({method: 'get', uri: ''})
      .then(resp => {
        nextTodoId = getNextID(resp.data);
        return resp.data;
      })
      .then(data => dispatch(todoActioner( { data }, actionType.LOAD_TODO_SUCCESS)))
      .catch(err => { console.log(err); });
}

export const addTodo = name => {
  const payload = { id: nextTodoId++, name, done: false };
  return dispatch => todoRequest({method: 'post', uri: '', payload})
      .then(resp => dispatch(todoActioner(resp.data, actionType.ADD_TODO_SUCCESS)))
      .catch(err => { console.log(err); })
}

export const toggleTodo = (id, status) => {
  const payload = { done: !status };
  return dispatch => todoRequest({method: 'put', uri: `/${id}`, payload})
      .then(resp => dispatch(todoActioner(resp.data, actionType.TOGGLE_TODO_SUCCESS)))
      .catch(err => { console.log(err); })
}

export const deleteTodo = id => {
  return dispatch => todoRequest({method: 'delete', uri: `/${id}`})
      .then(resp => dispatch(todoActioner(resp.data, actionType.DELETE_TODO_SUCCESS)))
      .catch(err => { console.log(err); })
}

//get details + endDate
export const loadDetails = id => {
return dispatch => todoRequest({method: 'get', uri: `/${id}`})
      .then(resp => dispatch(todoActioner({data: resp.data}, actionType.LOAD_DETAILS_SUCCESS)))
      .catch(err => { console.log(err);});
}

//post details + endDate
export const addDetails = ( id, details, endDate ) => {
  return dispatch => todoRequest({method: 'put', uri: `/${id}`}, { details, endDate})
      .then(resp => dispatch(todoActioner( { data: resp.data }, actionType.ADD_DETAILS_SUCCESS)))
      .catch(err => { console.log(err);});
}
