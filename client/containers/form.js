import Form from '../components/forms';

import { connect } from 'react-redux'; // how does this work?
import { addTodo } from '../actions'

const mapDispatchtoProps = dispatch => ({
    onSubmit: text => dispatch(addTodo(text))
});

let AddTodo = connect(null, mapDispatchtoProps)(Form);

export default AddTodo;
