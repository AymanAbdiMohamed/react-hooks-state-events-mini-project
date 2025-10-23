import React from "react";

function Task({ task, onDeleteTask }) {
  if (!task) return null; // safety check
  return (
    <li>
      <span>{task.text}</span> - <span>{task.category}</span>
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </li>
  );
}

export default Task;
