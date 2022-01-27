import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
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
      <h1 className='mt-2 text-4xl text-center'>Products List</h1>
      {loading ? (
        <p>Looding</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='grid gap-8 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4'>
          {products.length &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Home;
