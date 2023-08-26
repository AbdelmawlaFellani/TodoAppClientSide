// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
// import Menu from './components/Menu';
// import CompletedPage from './pages/CompletedPage';
// import TrashPage from './pages/TrashPage';
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import axios from "axios";
function App() {
  // const [iscomplete, setIsComplete] = useState(false);
  const [idCounter, setIdCounter] = useState(4);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    function fetchTodos() {
      axios
        .get("http://localhost:8080/api/todos")
        .then((res) => setTodos([...todos, ...res.data]));
    }
    fetchTodos();
  }, []);

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
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);
    axios
      .delete(`http://localhost:8080/api/todos/${id}`)
      .then((response) => console.log("Task deleted successfully"))
      .catch((error) => console.log("Task deleted"));
  }
  function MarkCompleted(id) {
    const updatedTodos = 
    todos.map((todo) => (todo._id === id ? { ...todo, completed: !todo.completed } : todo));
      axios
      .put(`http://localhost:8080/api/todos/${id}`, updatedTodos)
      .then((res) => {
        setTodos(updatedTodos)
      }).catch ((err) => {
        console.log('Error trying to update');
      });
      setTodos(updatedTodos)

  }
  return (
    <div className="App font-primary">
      <div className="font-primary text-center text-5xl text-blue-500 font-extrabold p-12">
        To-do App
      </div>
      <AddTodo addTodo={AddTodoF} />
      <TodoList
        todos={todos}
        deleteTodo={DeleteTodo}
        markCompleted={MarkCompleted}
      />
    </div>
  );
}

export default App;
