import React from "react";

function ProductCard() {
  return (
    <div className="card-basic card_custom_width app cursor-p">
      <div className="badge-container">
        <img
          className="card-img"
          src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="product"
        />
        <span className="card-withBadge">New</span>

        <div>
          <div className="d-flex justify-content-between align-items-center ">
            <h3 className="card-heading pri_clr"> Oranges </h3>
            <div>
              <i className="fa-solid fa-star products_filter_staricon_style"></i>
              <small className="sec_clr rating-num"> 5 </small>
            </div>
          </div>

          <small className="card-subHeading sec_clr">Brand</small>
        </div>

        <p className="card-description text-bold pri_clr">₹ 300</p>
      </div>

      <div className="card-footer">
        <button className="btn custom_btn" id="btn-add-to-cart">
          <span className="icon">
            <i className="fa fa-shopping-cart"></i>
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
