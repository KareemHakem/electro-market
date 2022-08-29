import React from "react";

const Home = () => {
  return (
    <>
      Header
      <div>
        <h2>Best Selling Product</h2>
        <p>Speakers Of Many Variations</p>
      </div>
      <div>{["product1", "product2"].map((product) => product)}</div>
      footer
    </>
  );
};

export default Home;
