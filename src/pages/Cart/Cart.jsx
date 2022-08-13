import React from "react";
import { Navbar, CartProductCard } from "../../components/index";
import "./Cart.css";
import { useCart } from "../../context/cart-context";
import CartPayment from "./CartPayment/CartPayment";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <Navbar />

      <h2 className="cart-page-title">My Cart</h2>

      {cartProducts.length <= 0 && (
        <div className="empty-shoping-cart-icon-container">
          <i className="fa-solid fa-basket-shopping empty-shoping-cart-icon"></i>
          <button className="btn cta-btn" onClick={() => navigate("/")}>
            Browse Products
          </button>
        </div>
      )}

      <section className="d-flex cart-content-container">
        <div className="cart-products-container d-flex">
          {cartProducts.map((product) => {
            return <CartProductCard key={product._id} product={product} />;
          })}
        </div>

        {cartProducts.length > 0 && <CartPayment />}
      </section>
    </div>
  );
}

export default Cart;
