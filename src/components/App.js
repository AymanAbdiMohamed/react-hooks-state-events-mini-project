import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

// Sample data
const TASKS = [
  { text: "Buy groceries", category: "Home" },
  { text: "Finish project", category: "Work" },
  { text: "Exercise", category: "Fitness" },
];

const CATEGORIES = ["All", "Home", "Work", "Fitness"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const displayedTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
    </div>
  );
}

export default App;
