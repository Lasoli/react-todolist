import React from 'react';
import './NewTodoInput.css'

function NewTodoInput () {
  return (
    <div>
      <input
        type="text"
        className='new-input'
        placeholder='Write your name here'
        />
      <button>Add</button>
    </div>
  )
};

export default NewTodoInput;
