import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || ""); // default first real category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1] || "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        required
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
