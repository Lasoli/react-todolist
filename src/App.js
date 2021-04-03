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

import logo from './logo.svg';
import './App.css';
import NewTodoInput from './components/NewTodoInput/NewTodoInput.js';
import TodoList from './components/TodoList/TodoList';


//fetching our todos from localStorage
// THIS ARE DUMMY DATA TO PRETEND TO BE OUR LOCALSTORAGE
// fetching our todos from localStorage
const todos = [
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

//const addTodoBtn = "Add new to-do button";

export default function App() {
  return (
    <div className="App">
      <header className="myHeaderClass">
        <h1>Navbar at some point</h1>
      </header>

      <main>

        <div id="myDIV" className="header container bg-black shadow">
        <div className="row">
        <div className="col-9" id="date"></div>
          <h2>Daily To-Do List</h2>
        </div>
          <NewTodoInput />
          <TodoList todos={todos} />
        </div>

      </main>

      <footer>Copyright</footer>
    </div>
  );
}
