import React from "react";
import "./SingleOrderItem.css";

function SingleOrderItem({ product }) {
  const { name, price, img, qty, vendor } = product;

  return (
    <div className="d-flex gap-3 p-1">
      <img className="order-product-img" src={img} alt={name} />

      <div className="d-flex f-direction-col">
        <p className="mb-small order-para-text font-bold">{`${name} (${vendor})`}</p>

        <small className="verticalcard-wishlist-icon-select-clr font-bold">
          ₹{price}
        </small>

        <small>
          <span className="font-bold">Quantity</span>: {qty}
        </small>
      </div>
    </div>
  );
}

export default SingleOrderItem;
