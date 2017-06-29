import React from 'react';
import { Link } from 'react-router-dom';

import './item.css'

const Todo = ({ onDone, onDelete, id, done, name}) => {
    const checked = (done) ? 'checked' : '';
    return (
      <li className="todo">
        <input type="checkbox" onChange={onDone} checked={done}/>
        <div className={(done) ? 'complete' : ''}>{name}</div>
        <Link to={`details/${id}`}>Details</Link>
        <a className="delete" href="#" onClick={onDelete}>Delete</a>
      </li>
    );

};

export default Todo
