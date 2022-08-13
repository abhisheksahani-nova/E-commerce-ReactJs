import React from "react";
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cartProducts } = useCart();

  const navigate = useNavigate();

  return (
    <nav className="nav-bar boxShadow">
      <div className="nav-innerContainer docSite-nav-clr">
        <h2 className="nav-heading">VegMart</h2>
      </div>

      <div className="nav-innerContainer nav-icon-container">
        <div className="badge-container" onClick={() => navigate("/cart")}>
          <i className="fa-solid fa-cart-shopping docSite-nav-clr nav-icon"></i>
          <span className="badge notification-right-badge badge-lg">
            {cartProducts.length}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
