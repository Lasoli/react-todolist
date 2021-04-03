import logo from './logo.svg';
import './App.css';
import NewTodoInput from './components/NewTodoInput/NewTodoInput.js';
import TodoList from './components/TodoList/TodoList';


//fetching our todos from localStorage
const todos = [
  {
    id: '54363',
    title: '',
    isDone: false
  },
  {
    id: '3634',
    title: '',
    isDone: false
  },
  {
    id: '34636',
    title: '',
    isDone: false
  },
];

const addTodoBtn = "Add new to-do button";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My super fancy to-do list</h1>
      </header>
      <main>
        <div id="myDIV" className="header container bg-black shadow">
          I'm the body
          <NewTodoInput />
          <TodoList />
        </div>
        <div className="row">
        <div className="col-9" id="date"></div>
          <h2>Daily To-Do List</h2>
        </div>
      </main>
      <footer>Copyright</footer>
    </div>
  );
}
