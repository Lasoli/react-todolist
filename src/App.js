/*
1_ divide our UI in components: Think in React Way
  _ document layout => App.js
  _ input + add btn => NewTask
  _ list of todos => TaskList
  _ todo (delete btn) => Task
  _ extra: edit screen => EditTask

2_ Create NewTask UI
    - add it to App.js

3_ Work on App.js UI
4_ create TaskList UI
5_ create Task UI
6_ create Edit Task UI
*/

/*
1_ create Appjs and write general document html
2_ cretae child component and export it
3_ import child component in App.js
4_ Add child component to our App.js html <NewTodoInput />
5_ In our Child component, we write the html that we need
6_ we pass down information as props from our Appjs to our Child component
 // props are like custom html attributes
7_ we grab props in our child component
   // check the 3 different way how to gran props in your components
8_ we use thse props in child component html
*/
// How to add props
// 1_ take props with the whole prop obj
// function NewTodoInput(props}) {
// console.log(props) // is an obj of properties
// { labelBtn: 'Add New Todo BTN', placeholder: 'write your name here'}

// 2_ decostruct props properties in the functions brakets
// i.e. function NewTodoInput({ label, placeholder }) {

// 3_ decostructive props properties in a variable
//const { labelBtn, placeholder } = props;

//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import NewTodoInput from './components/NewTodoInput/NewTodoInput.js';
import TodoList from './components/TodoList/TodoList';


//fetching our todos from localStorage
// THIS ARE DUMMY DATA TO PRETEND TO BE OUR LOCALSTORAGE
// fetching our todos from localStorage
 /* const todosData = [
  {
    id: '54363',
    title: 'Do this',
    isDone: false
  },
  {
    id: '3634',
    title: 'Do that',
    isDone: true
  },
  {
    id: '34636',
    title: 'Do that too',
    isDone: false
  },
];
*/



//const addTodoBtn = "Add new to-do button";

export default function App() {
  const [todosState, setTodos] = useState(JSON.parse(localStorage.getItem("todosData")) || []);
  // console.log("anything");
  function handleDelete(todoId) {
       // console.log("Callback function");
        //const newTodos = todosState.filter(({ id }) => id !== todoId);
        //setTodos(newTodos);
        save(todosState.filter(({ id }) => id !== todoId));
        }

    function handleNewTodo(newTodo) {
       // console.log("add new todo", newTodo);
        const newTodos = [newTodo, ...todosState];
        //console.log(newTodos);
        //setTodos(newTodos);
        save(newTodos);
    }

    function handleCompletedTodo(todoId) {
        const newTodos = todosState.map((todo) => {
            if (todo.id === todoId) {
                todo.isDone = !todo.isDone
            }
        return todo;
        });
        //setTodos(newTodos);
        save(newTodos);
    }

    function clearAll() {
        alert("Are you sure you want to delete your to-do list?");
        save([]);
    }

    function save(newState) {
     setTodos(() => {    
        localStorage.setItem("todosData", JSON.stringify(newState));
        return newState;
     });
    }

    function handleEdit(editedId, editedTitle) {
       const newTodos = todosState.map((todo) => {
      if (todo.id === editedId) {
        todo.title = editedTitle;
      }
      return todo;
    });
    setTodos(newTodos);
    }

  return (
    <div className="App">
      <header className="App-header container bg-black shadow">
            <button className="open-main-nav">
			<span className="burger"></span>
            	<span className="burger-text">Menu</span>
                </button>
      <p id="date">Current date</p>
        <h1>My daily <strong>to-do</strong> list</h1>
        <h3>A stitch in time saves nine...</h3>
      </header>
      <main>
          <NewTodoInput addTodo={handleNewTodo} />
          <div>
        <select name="todos" id="select">
           <option value="all">All to-dos</option>
           <option value="completed">Completed</option>
           <option value="uncompleted">Uncompleted</option>
       </select>
          <TodoList 
          todos={todosState} 
          deleteTodo={handleDelete}
          completedTodo={handleCompletedTodo}
          editTodo={handleEdit}
          />
        </div>
      
        <button id="clearBtn" onClick={() => clearAll()}>Clear all</button>
        </main>
    </div>
  );
}


/* 6_ Delete Function
 -> onClick event in the delete item button 
 -> call func call deleteTodoById
 -> inside deleteTodoById we return the todo id
 -> from Appjs we send down a prop to Todo: prop: deleteTodo
 -> deleteTodo is a callback func. A func that return a value of another func

7_ AddNew Todo
  -> add Event listener on Clicking Enter
  -> listen to onChange event, take event obj and key
  -> check if key === 13 then create new todo obj
  -> send the newTodo to our Appjs
  -> Appjs grab newTodo in handleNewTodo()
  -> setTodos(newTodo)

8_ isDone btn
   Todojs
  1_ deconsturct from functin props the completeTodo
  2_ checked={isDone}
  3_ add onChange event on the input
  4_ call completeTodo() and return todo id

   Appjs
  1_ add prop to <TaskList />: completeTodo with value handleCompleteTodo
  2_ grab todoId as func arg
  3_ create newTodos cont
  4_ map trought all todos 
  5_ if todo.id === todoId 
    -> reassign todo.isDone to opposito of todo.isDone
  6_ return todo
  7_ setTodos(newTodos)

6_ create Edit Task UI
    1_ create a new React component EditTodo.js
    2_ We will create input field + button (edit todo)
    3_ input default value is the current todo value
    4_ when input value is changed, save the new value in the state
       -> here you will need to use useState 
    5_ when user click the button, save the value of the field in the todo array
       -> Here you will need to use a callback function and handle the function in App.js
    6_ go to Todo.js and add a edit button
    7_ when click edit, conditionally show Edit.js or input+text+delete /edit buttons

7_ Save and retrieve items from local storage
    -> save items when: add new todo, delete todo, edit todo, isDone todo
    -> retrieve items on Appjs and add them as default state
 */
