import React from "react";
import { Navbar, ProductCard } from "../../components/index";
import Filter from "./Filter/Filter";
import "./ProductsPage.css";
import { products } from "../../db/products";

function ProductsPage() {
  return (
    <div className="homepage-main-container">
      <Navbar />

      <section className="productlisting-main-content-container d-flex p-relative">
        <Filter />

        <div className="productlisting-products-container">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
