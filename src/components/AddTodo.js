import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (taskTitle.trim() !== "" && taskDesc.trim() !== "") {
      addTodo(taskTitle, taskDesc);
      setTaskDesc("");
      setTaskTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div className="flex justify-center gap-8">
          <label
            htmlFor="title"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              name="title"
              id="title"
              required={true}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Todo Title"
              className="peer h-12 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Todo Title
            </span>
          </label>
          <label
            htmlFor="desc"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              name="desc"
              id="desc"
              required={true}
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              placeholder="Todo Description"
              className="peer h-12 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Todo Description
            </span>
          </label>
        </div>
        <div className="flex justify-center p-4">
          <button
            type="submit"
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 border border-blue-600 group-active:border-blue-500"></span>
            <span className="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Add Todo
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
