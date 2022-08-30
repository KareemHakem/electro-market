import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

// import Cart from "../Cart";
// import { useStateContext } from "../context/StateContext";

function Navbar() {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Electro Market</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">5</span>
      </button>
    </div>
  );
}

export default Navbar;
