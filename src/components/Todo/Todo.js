import React from 'react';
import './Todo.css';

// 1_ get isDone prop
// 2_ display 'checked' attribute in checkbox based on isDone true/false
// react way-> put your conditional in {isDone ? ....}
// 3_ display conditionally the class of the todo
// 4_ display conditionally the contenteditable attribute

function Todo({ title, isDone }) {
  return (
    <li className={isDone ? 'itemDone testClass' : 'itemNotDone' }>
      <input type="checkbox" defaultChecked={isDone} />
      <p>{title}</p>
      <button>Delete</button>
    </li>
  );
}

export default Todo;
