import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../../context/StateContext";
import { runFireworks } from "../lib/utils";

function Success() {
  const [order, setOrder] = useState(null);
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
      </div>
    </div>
  );
}

export default Success;
