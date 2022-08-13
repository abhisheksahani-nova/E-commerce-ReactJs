import React from "react";
import "./CartProductCard.css";
import { useCart } from "../../context/cart-context";

function CartProductCard({ product }) {
  const { name, price, category, img, id, qty, vendor } = product;

  const { setCartProducts } = useCart();

  function handleDecrementQty() {
    setCartProducts((cartProducts) => {
      return cartProducts.map((product) =>
        product.id === id
          ? { ...product, qty: product.qty <= 0 ? qty : product.qty - 1 }
          : product
      );
    });
  }

  function handleIncrementQty() {
    setCartProducts((cartProducts) => {
      return cartProducts.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      );
    });
  }

  function removeProductFromCart() {
    setCartProducts((cartProducts) => {
      return cartProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <div className="card-basic Card-horizontalImage-textContainer cart-card-resize p-relative">
      <div className="Card-horizontalImage-text">
        <img
          className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart-card-imgresize"
          src={img}
          alt={name}
        />
        <i
          className="fa-solid fa-xmark cart-card-closeicon"
          onClick={() => removeProductFromCart()}
        ></i>

        <div className="ml-2 cart-card-content">
          <h3 className="card-heading pri-clr">{name}</h3>
          <small className="card-subHeading sec-clr">
            {" "}
            {`${vendor} (${category})`}
          </small>
          <p className="card-description text-bold pri-clr">₹ {price}</p>

          <div className="d-flex cart-card-quantitycontainer">
            <button
              className="btn cart-card-outlinebtn customstyle-btn pri-outline-btn"
              onClick={() => handleDecrementQty()}
            >
              -
            </button>

            <input
              className="cart-card-quantity-inp pri-outline-btn"
              type="text"
              value={qty}
            />

            <button
              className="btn cart-card-outlinebtn customstyle-btn pri-outline-btn"
              onClick={() => handleIncrementQty()}
            >
              +
            </button>
          </div>

          <button
            className="btn cart-card-removebtn cta-btn mt-2 mb-2"
            onClick={() => removeProductFromCart()}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
