import React from 'react';
import './Todo.css';

function Todo () {
  return (
    <li className="todoItem">
      <input type="checkbox" />
      Grocery
      <button>Delete</button>
    </li>
  )
}

export default Todo
