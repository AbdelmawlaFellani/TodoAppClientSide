import React from "react";

export default function TodoItem({ todo, deleteTodo , markCompleted }) {
  return (
    <li>
      <div className={todo.completed ? 'completed' : ''}>
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
        <div>
          <label htmlFor="completed">
            Completed :
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={todo.completed}
              onChange={() => markCompleted(todo.id)}
            />
          </label>
        </div>
        <div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
}
