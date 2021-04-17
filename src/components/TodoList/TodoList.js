import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({ todos, deleteTodo, completedTodo }) {
  return (
    <div>

    <ul>
        {todos.map((todo, index) => (
      // react Dom expect unique element on the document
        // when we loop we must add key prop which is similar to an id html
        // if you don't do it, you get a warning in teh console
        <Todo 
        id={todo.id}
        key={index} 
        title={todo.title} 
        isDone={todo.isDone}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
        />
    ))}
    </ul>

    </div>
  );
}

export default TodoList;
