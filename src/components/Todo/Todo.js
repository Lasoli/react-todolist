import React, { useState } from 'react';
import './Todo.css';
import EditTodo from "../EditInput/EditInput.js";

// 1_ get isDone prop
// 2_ display 'checked' attribute in checkbox based on isDone true/false
// react way-> put your conditional in {isDone ? ....}
// 3_ display conditionally the class of the todo
// 4_ display conditionally the contenteditable attribute

function Todo ({ title, isDone, id, deleteTodo, completedTodo, editTodo }) {
    const [isEdit, setIsEdit] = useState(false);

    function newEditState(boolean) {
        setIsEdit(boolean);
    }

  return (
  <div className="container">
  {isEdit ? (
      <EditTodo 
      title={title} 
      handleIsEdit={newEditState}
      editTodo={editTodo}
      id={id}
      />
  ) : (
  <li className={isDone ? "checked-todo row" : "row"}>
      <input 
      className="col-2 checkbox"
      type="checkbox" 
      checked={isDone}
      onChange={() => completedTodo(id)}
      />
      <p className="col-7">{title}</p>
      <button className="col-2" id="editBtn" onClick={() => newEditState(true)}>EDIT</button>
      <button className="col-1" id="deleteBtn" onClick={() => deleteTodo(id)}>X</button>
    </li>
    )}
    </div>
  );
}

export default Todo;
