import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo}) {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoList;
