import React from 'react';

import './styles.css';

const Form = ({onSubmit}) => {
  let input
	const handleSubmit = (e) => {
  	e.preventDefault();
   	onSubmit(input.value)
  }
	return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        ref={ node => { input = node}}
      placeholder="Todo name" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Form;
