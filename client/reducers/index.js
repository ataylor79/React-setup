import { combineReducers } from 'redux';
import todos from './todos';
import details from './details';

const todoApp = combineReducers({
	todos,
	details
});

export default todoApp;
