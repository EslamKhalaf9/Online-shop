import React from "react";
import { Link } from "react-router-dom";
import Rate from "./Rate";
const Product = ({ product }) => {
  return (
    <div className='text-center bg-gray-100 m-4 rounded-lg overflow-hidden text-gray-700 shadow-2xl border'>
      <div>
        <Link to={`/product/${product._id}`}>
          <img
            className='bg-cover w-full'
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>
      <div className='title text-xl my-2 font-semibold  px-2'>
        <h2>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h2>
      </div>
      <div className='rating flex items-center justify-center text-lg p-2'>
        <Rate rating={product.rating} numReviews={product.numReviews} />
      </div>
      <div className='price font-bold my-2 text-xl px-2'>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default Product;
