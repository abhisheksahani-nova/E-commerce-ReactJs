import React from "react";
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cartProducts } = useCart();

  const navigate = useNavigate();

  return (
    <nav className="nav-bar boxShadow border-bottom">
      <div className="nav-innerContainer docSite-nav-clr">
        <h2 className="nav-heading cursor-p" onClick={() => navigate("/")}>
          GreenMart
        </h2>
      </div>

      <div className="nav-innerContainer nav-icon-container">
        <div className="badge-container cursor-p" onClick={() => navigate("/cart")}>
          <i className="fa-solid fa-cart-shopping docSite-nav-clr nav-icon"></i>
          <span className="badge notification-right-badge badge-lg">
            {cartProducts.length}
          </span>
        </div>

        <i
          className="fa-solid fa-basket-shopping docSite-nav-clr nav-icon cursor-p"
          onClick={() => navigate("/")}
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
