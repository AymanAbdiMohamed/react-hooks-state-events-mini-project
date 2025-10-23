import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
