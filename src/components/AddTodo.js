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
        <label htmlFor="title">
          Todo Title :
          <input
            type="text"
            name="title"
            id="title"
            required={true}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Todo title"
          />
        </label>
        <label htmlFor="desc">
          Todo Description :
          <input
            type="text"
            name="desc"
            id="desc"
            required={true}
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            placeholder="Todo Description"
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
