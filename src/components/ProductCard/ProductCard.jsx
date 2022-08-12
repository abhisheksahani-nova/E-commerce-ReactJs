import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { name, price, available, vendor, category, img } = product;

  return (
    <div className="card-basic card-custom-width cursor-p">
      <div className="badge-container">
        <img className="card-img" src={img} alt={name} />
        <span className="card-withBadge">New</span>

        <div className="p-small">
          <div className="d-flex justify-content-between card-title-container">
            <h3 className="card-title pri-clr"> {name} </h3>
            <div>
              <i className="fa-solid fa-star staricon-style"></i>
              <small className="sec_clr rating-num"> 5 </small>
            </div>
          </div>

          <small className="card-subtitle sec-clr">{category}</small>

          <p className="product-price text-bold pri-clr">₹ {price}</p>

          <div className="card-footer-container">
            <button className="btn custom-btn">
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
