import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList () {
  return (
    <div>
      <h2>To-do list</h2>
    <ul>
      <Todo />
    </ul>
    </div>
  )
}

export default TodoList
