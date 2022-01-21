import React from "react";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";
const Home = () => {
  return (
    <>
      <h1 className='mt-2 text-center'>Products List</h1>
      <Row className='mb-2 -webkit-center'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default Home;
