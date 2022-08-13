import React from "react";
import { useCart } from "../../../context/cart-context";
import "./CartPayment.css";

function CartPayment() {
  const { cartProducts } = useCart();

  const cartPrice = cartProducts.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  return (
    <div className="cart-payment-receipt card-basic app">
      <div className="b-bottom1 cart-pricedetails-section-gap">
        <h4>PRICE DETAILS</h4>
      </div>
      <div className="cart-pricedetails-section cart-pricedetails-section-gap d-flex">
        <p>Price</p>
        <p>₹ {cartPrice ? cartPrice : 0}</p>
      </div>

      <div className="cart-pricedetails-section cart-pricedetails-section-gap d-flex b-bottom1">
        <p>Delivery Charges</p>
        <p>FREE</p>
      </div>

      <div className="cart-pricedetails-section cart-pricedetails-section-gap d-flex b-bottom1">
        <h3>TOTAL AMOUNT</h3>
        <h3>₹{cartPrice ? cartPrice : 0} </h3>
      </div>

      <div className="cart-pricedetails-section-gap mb-1">
        <button className="btn cta-btn cart-pricedetails-section-gap width-100p">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
