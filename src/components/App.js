import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskToDelete) =>
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));

  const handleCategorySelect = (category) => setSelectedCategory(category);

  const handleTaskFormSubmit = (newTask) =>
    setTasks([...tasks, newTask]);

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>My Tasks</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}

export default App;
