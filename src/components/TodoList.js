import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, markCompleted }) {
  return (
    <div className="grid sm:grid-cols-1 lg::grid-cols-2 gap-5">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
