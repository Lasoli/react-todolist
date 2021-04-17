import React from 'react';
import './Todo.css';

// 1_ get isDone prop
// 2_ display 'checked' attribute in checkbox based on isDone true/false
// react way-> put your conditional in {isDone ? ....}
// 3_ display conditionally the class of the todo
// 4_ display conditionally the contenteditable attribute

function Todo ({ title, isDone, id, deleteTodo, completedTodo }) {
    const isEdit = false; // placeholder, change state to true here by clicking
  return (
  <div className="container">
  {isEdit ? (
  <p>Show Edit.js component</p>
  ) : (
  <li className={isDone ? "itemDone testClass row" : "itemNotDone row"}>
      <input 
      className="col-2 checkbox"
      type="checkbox" 
      checked={isDone}
      onChange={() => completedTodo(id)}
      />
      <p className="col-7">{title}</p>
        <button className="col-2" id="editBtn">EDIT</button>
      <button className="col-1" id="deleteBtn" onClick={() => deleteTodo(id)}>X</button>
    </li>
    )}
    </div>
  );
}

export default Todo;
