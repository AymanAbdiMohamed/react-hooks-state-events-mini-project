import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("");
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
        <option value="">Select category</option>
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
