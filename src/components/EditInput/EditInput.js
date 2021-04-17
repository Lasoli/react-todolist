import React, { useState } from 'react';
import './EditInput.css';

 export default function EditTodo({ title, handleIsEdit, id, editTodo }) {
	const [inputValue, setInputValue] = useState(title);

	function handleSaveButton() {
		handleIsEdit(false);
		editTodo(id, inputValue);
	}
	
    function handleInputValue({ target }) {
        setInputValue(target.value);
    }

	return (
		<div>
			<input 
			id="editInput"
			onChange={handleInputValue}
			value={inputValue}
			/>
			<button 
			id="saveBtn"
			onClick={handleSaveButton}
			>Save</button>
		</div>
	)
}