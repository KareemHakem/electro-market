import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";

function HeroPanel({ bannerDate }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerDate.smallText}</p>
        <h3>{bannerDate.midText}</h3>
        <h1> {bannerDate.largeText1} </h1>
        <img
          src={urlFor(bannerDate.image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${bannerDate.product}`}>
            <button type="button"> {bannerDate.buttonText} </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p> {bannerDate.desc} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPanel;
