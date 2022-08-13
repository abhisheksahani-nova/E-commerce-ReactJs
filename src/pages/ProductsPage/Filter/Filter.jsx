import React from "react";
import "./Filter.css";

function Filter({ state, dispatch }) {
  return (
    <div className="filter-main-container">
      <div className="d-flex filter-header-section">
        <h2>Filters</h2>
        <button className="btn filter-clear-btn">Clear</button>
      </div>

      <div className="mb-2">
        <h4 className="filter-subtitle">Category</h4>
        <div className="filter-input-container">
          <input
            onClick={() =>
              dispatch({ type: "FILTER_BY_CATEGORY", payload: "Vegetables" })
            }
            type="checkbox"
          />
          <label className="ml-1 filter-input-label">Vegetables</label>
        </div>

        <div className="filter-input-container">
          <input
            type="checkbox"
            onClick={() =>
              dispatch({ type: "FILTER_BY_CATEGORY", payload: "Fruits" })
            }
          />
          <label className="ml-1 filter-input-label">Fruits</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
