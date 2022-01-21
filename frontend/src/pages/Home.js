import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products/");
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1 className='mt-2 text-center'>Products List</h1>
      <Row className='mb-2 -webkit-center'>
        {products.length &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </Row>
    </>
  );
};

export default Home;
