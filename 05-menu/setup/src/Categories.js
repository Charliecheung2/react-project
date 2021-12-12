import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(item)}
            className="filter-btn"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
