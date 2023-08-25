import React from "react";

export default function TodoItem({ todo, deleteTodo, markCompleted }) {
  return (
    <div className="w-1/2 m-auto">

    <li className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
    <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>
      <div >
      <div className={todo.completed ? "line-through" : ""}>
        <div className="text-xl font-bold text-blue-500 uppercase">{todo.title}</div>
        <div className="text-gray-500">{todo.desc}</div>
      </div>

        <div className="flex justify-between">
          <label htmlFor={todo.id}>
            <input
              type="checkbox"
              name="completed"
              id={todo.id}
              checked={todo.completed}
              onChange={() => markCompleted(todo.id)}
            />  Completed
          </label>
        
        
          <button
            onClick={() => deleteTodo(todo.id)}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
            <span className="block border border-red-600 bg-red-600 px-4 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:translate-x-1 group-hover:translate-y-1">
              Delete
            </span>
          </button>
        </div>
          </div>

    </li>
    </div>
  );
}
