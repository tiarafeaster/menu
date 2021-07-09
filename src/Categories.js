import React from "react";

function Categories({ filterItems }) {
  return (
    <div className="btn-container">
      <buttons
        className="filter-btn"
        onClick={() => {
          filterItems("all");
        }}
      >
        All Items
      </buttons>
      <buttons
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        Breakfast
      </buttons>
    </div>
  );
}

export default Categories;
