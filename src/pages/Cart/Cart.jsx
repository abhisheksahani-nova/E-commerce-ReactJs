import React from "react";
import { Navbar, CartProductCard } from "../../components/index";
import "./Cart.css";
import { useCart } from "../../context/cart-context";
import CartPayment from "./CartPayment/CartPayment";

function Cart() {
  const { cartProducts } = useCart();

  return (
    <div className="cart-page-container">
      <Navbar />

      <h2 className="cart-page-title">My Cart</h2>

      <section className="d-flex cart-content-container">
        <div className="cart-products-container d-flex">
          {cartProducts.map((product) => {
            return <CartProductCard key={product._id} product={product} />;
          })}
        </div>

        <CartPayment />
      </section>
    </div>
  );
}

export default Cart;
