import React, { useReducer } from "react";
import { Navbar, ProductCard } from "../../components/index";
import Filter from "./Filter/Filter";
import "./ProductsPage.css";
import { products } from "../../db/products";

function ProductsPage() {
  const [state, dispatch] = useReducer(filterReducer, {
    categories: [],
  });

  function filterReducer(state, action) {
    switch (action.type) {
      case "FILTER_BY_CATEGORY":
        return state.categories.includes(action.payload)
          ? {
              ...state,
              categories: state.categories.filter(
                (category) => category !== action.payload
              ),
            }
          : { ...state, categories: [...state.categories, action.payload] };

      case "CLEAR_FILTER":
        return {
          categories: [],
        };

      default:
        return state;
    }
  }

  function applyFilters(state, products) {
    let filterProducts = products;

    if (state.categories.length) {
      filterProducts = filterProducts.filter(({ category }) => {
        return state.categories.includes(category);
      });
    }

    return filterProducts;
  }

  const filteredProducts = applyFilters(state, products);

  return (
    <div className="homepage-main-container">
      <Navbar />

      <section className="productlisting-main-content-container d-flex p-relative">
        <Filter state={state} dispatch={dispatch} />

        <div className="productlisting-products-container">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
