import React from "react";

function Navbar() {
  return (
    <nav className="nav-bar boxShadow">
      <div className="nav-innerContainer docSite-nav-clr">
        <h2 className="nav-heading">VegMart</h2>
      </div>
      <div className="nav-innerContainer nav-icon-container">
        <a
          className="docSite-nav-clr nav-icon"
          href="https://github.com/abhisheksahani-nova"
        >
          <i className="fa fa-github nav-icon"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
