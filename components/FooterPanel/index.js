import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";

function FooterPanel({
  footerPanel: {
    discount,
    desc,
    largeText1,
    largeText2,
    smallText,
    saleTime,
    buttonText,
    image,
    midText,
    product,
  },
}) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <img
          src={urlFor(image)}
          className="footer-banner-image"
          alt="image-banner"
        />
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterPanel;
