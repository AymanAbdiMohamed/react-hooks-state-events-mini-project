import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <li>
      {task.text} - <em>{task.category}</em>
      <button onClick={() => onDeleteTask(task.text)}>Delete</button>
    </li>
  );
}

export default Task;
