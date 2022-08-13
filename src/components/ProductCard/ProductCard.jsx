import React from "react";
import "./ProductCard.css";
import { useCart } from "../../context/cart-context";

function ProductCard({ product }) {
  const { name, price, category, img, vendor, available } = product;

  const { setCartProducts } = useCart();

  return (
    <div className="card-basic card-custom-width cursor-p">
      <div className="badge-container">
        <img className="card-img" src={img} alt={name} />
        <span className="card-withBadge badge-custom-bg">
          {available ? "In Stock" : "Out Of Stock"}
        </span>

        <div className="p-small">
          <h3 className="card-title pri-clr"> {name} </h3>

          <small className="card-subtitle sec-clr">
            {`${vendor} (${category})`}
          </small>

          <p className="product-price text-bold pri-clr">₹ {price}</p>

          <div className="card-footer-container">
            <button
              className="btn custom-btn"
              onClick={() =>
                setCartProducts((cartProducts) => [...cartProducts, product])
              }
            >
              <span className="icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
