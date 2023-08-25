// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
// import Menu from './components/Menu';
// import CompletedPage from './pages/CompletedPage';
// import TrashPage from './pages/TrashPage';
import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
function App() {
  const [iscomplete, setIsComplete] = useState(false);
  const [idCounter, setIdCounter] = useState(4);
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "first Todo",
      desc: "First todo description",
      completed: false,
    },
    {
      id: 1,
      title: "second Todo",
      desc: "second todo description",
      completed: false,
    },
    {
      id: 2,
      title: "third Todo",
      desc: "third todo description",
      completed: false,
    },
    {
      id: 3,
      title: "fourth Todo",
      desc: "fourth todo description",
      completed: false,
    },
  ]);
  function AddTodoF(title, description) {
    const newTodo = {
      id: idCounter,
      title: title,
      desc: description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setIdCounter((prev) => (prev = prev + 1));
  }

  function DeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  function MarkCompleted(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
      setTodos(updatedTodos);
  }
  return (
    <div className="App font-primary">
      {/* <Router>
      <div>
        <Menu />

          <Route exact path="/" component={MainPage} />
          <Route path="/completed" component={CompletedPage} />
          <Route path="/trash" component={TrashPage} />
      </div>
    </Router> */}
      <div className="font-primary text-center text-5xl text-blue-500 font-extrabold p-12">To-do App</div>
      <AddTodo addTodo={AddTodoF} />
      <TodoList todos={todos} deleteTodo={DeleteTodo} markCompleted={MarkCompleted} />
    </div>
  );
}

export default App;
