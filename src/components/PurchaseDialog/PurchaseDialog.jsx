import React from "react";
import "./PurchaseDialog.css";
import { SingleOrderItem } from "../../components/index";
import { useCart } from "../../context/cart-context";

function PurchaseDialog({ setOpenPurchaseDialog }) {
  const { cartProducts } = useCart();

  return (
    <div>
      <div className="purchase-dialog-container">
        <div className={`list-style-none purchase-dialog-inner-container p-1`}>
          <div
            className={`d-flex purchase-dialog-header videolib-list-container border-bottom j-space-between mb-1`}
          >
            <h3 className="break-word">Your Purchase</h3>
            <i
              className="fa-solid fa-rectangle-xmark cursor-p"
              onClick={() => setOpenPurchaseDialog((prev) => !prev)}
            ></i>
          </div>

          <div className="d-flex f-direction-col gap-1 mt-1 mb-1 lightest-border border-radius">
            {cartProducts.map((product) => {
              return <SingleOrderItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDialog;
