import React from "react";
import { Navbar, ProductCard } from "../../components/index";
import Filter from "./Filter/Filter";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="homepage-main-container">
      <Navbar />

      <section className="productlisting-main-content-container d-flex p-relative">
        {/* <!-- filter sidebar --> */}
        <Filter />

        <div className="productlisting-products-container">
          <ProductCard />
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
