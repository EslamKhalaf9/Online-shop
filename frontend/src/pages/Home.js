import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../redux/actions/productActions";
const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1 className='mt-2 text-center'>Products List</h1>
      {loading ? (
        <p>Looding</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row className='mb-2 -webkit-center'>
          {products.length &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </Row>
      )}
    </>
  );
};

export default Home;
