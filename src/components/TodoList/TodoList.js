import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div>
      <h2>All to-dos</h2>

    <ul>
    {todos.map((todo, index) => (
      // react Dom expect unique element on the document
        // when we loop we must add key prop which is similar to an id html
        // if you don't do it, you get a warning in teh console
      <Todo key={index} title={todo.title} isDone={todo.isDone}/>
    ))}
    </ul>

    </div>
  );
}

export default TodoList;
