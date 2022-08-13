import React from "react";
import "./CartProductCard.css";

function CartProductCard({ product }) {
  const { name, price, category, img } = product;

  return (
    <div className="card-basic Card-horizontalImage-textContainer cart-card-resize p-relative">
      <div className="Card-horizontalImage-text">
        <img
          className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart-card-imgresize"
          src={img}
          alt={name}
        />
        <i className="fa-solid fa-xmark cart-card-closeicon"></i>

        <div className="ml-2 cart-card-content">
          <h3 className="card-heading pri-clr">{name}</h3>
          <small className="card-subHeading sec-clr">{category}</small>
          <p className="card-description text-bold pri-clr">₹ {price}</p>

          <div className="d-flex cart-card-quantitycontainer">
            <small className="sec-clr">Quantity :</small>
            <button className="btn cart-card-outlinebtn customstyle-btn pri-outline-btn">
              -
            </button>

            <input
              className="cart-card-quantity-inp pri-outline-btn"
              type="text"
            />

            <button className="btn cart-card-outlinebtn customstyle-btn pri-outline-btn">
              +
            </button>
          </div>

          <button className="btn cart-card-removebtn cta-btn mt-2 mb-2">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
