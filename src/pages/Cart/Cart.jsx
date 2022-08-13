import React from "react";
import { Navbar, CartProductCard } from "../../components/index";
import "./Cart.css";
import { useCart } from "../../context/cart-context";

function Cart() {
  const { cartProducts } = useCart();

  return (
    <div className="cart-page-container">
      <Navbar />

      <h2 className="cart-page-title">My Cart</h2>

      <section className="d-flex cart-content-container">
        {/* <!-- Product items container --> */}

        <div className="cart-products-container d-flex">
          {cartProducts.map((product) => {
            return <CartProductCard key={product._id} product={product} />;
          })}
        </div>

        <div className="cart-products-container d-flex"></div>

        {/* <!-- Payment details card container --> */}
      </section>
    </div>
  );
}

export default Cart;
