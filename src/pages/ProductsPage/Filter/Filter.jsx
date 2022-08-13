import React from "react";
import "./Filter.css";

function Filter({ state, dispatch }) {
  return (
    <div className="filter-main-container">
      <div className="d-flex filter-header-section">
        <h3>Filters</h3>
        <button
          className="btn filter-clear-btn"
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          Clear
        </button>
      </div>

      <div className="mb-2">
        <h4 className="filter-subtitle">Category</h4>
        <div
          className="filter-input-container"
          onClick={() =>
            dispatch({ type: "FILTER_BY_CATEGORY", payload: "Vegetables" })
          }
        >
          <input
            type="checkbox"
            checked={state.categories.includes("Vegetables")}
          />
          <label className="ml-1 filter-input-label">Vegetables</label>
        </div>

        <div
          className="filter-input-container"
          onClick={() =>
            dispatch({ type: "FILTER_BY_CATEGORY", payload: "Fruits" })
          }
        >
          <input
            type="checkbox"
            checked={state.categories.includes("Fruits")}
          />
          <label className="ml-1 filter-input-label">Fruits</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
