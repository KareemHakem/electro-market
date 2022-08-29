import React from "react";

import Products from "../components/Products";
import FooterPanel from "../components/FooterPanel";
import HeroPanel from "../components/HeroPanel";

import { client } from "../lib/client";

const Home = ({ products, bannerDate }) => {
  return (
    <>
      <HeroPanel />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers Of Many Variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterPanel />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerDate = await client.fetch(bannerQuery);

  return {
    props: { products, bannerDate },
  };
};

export default Home;
