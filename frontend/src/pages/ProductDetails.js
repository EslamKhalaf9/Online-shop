import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";

import Rate from "../components/Rate";
import { productDetails } from "../redux/actions/productActions";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  const addToCartHandeller = () => {
    navigate(`/cart/${id}/?qty=${qty}`, { replace: true });
  };
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Link
            className=' bg-slate-500 text-gray-200 m-4 inline-block p-2 rounded'
            to='/'
          >
            Go Back
          </Link>
          <div className='wrapper grid md:grid-cols-3 gap-3'>
            {/* first col */}
            <div className='productImage shadow-xl hover:shadow-2xl overflow-hidden m-3'>
              <img src={product.image} alt={product.name} />
            </div>

            {/* second col */}
            <div className='details text-gray-600 m-4'>
              <h3 className='text-2xl font-semibold my2'>{product.name}</h3>
              <div className='rating my-2'>
                <Rate
                  rating={product.rating || 0}
                  numReviews={product.numReviews || 0}
                />
              </div>
              <span className='price text-xl font-semibold'>
                Price: ${product.price}
              </span>
              <div className='description leading-6 text-lg my-2'>
                Description: {product.description}
              </div>
            </div>

            {/* third col */}
            <div className='controls bg-gray-300 text-gray-700 text-3xl text-center p-4 m-4 rounded-lg shadow-xl'>
              <div className='row my-4'>
                <span className='price'>Price: ${product.price}</span>
              </div>
              <div className='row mb-4'>
                <span className='status'>
                  Status:{" "}
                  {product.countInStock > 0 ? (
                    <span className='text-green-700'>In Stock</span>
                  ) : (
                    <span className='text-red-700'>Out Of Stock</span>
                  )}
                </span>
              </div>
              <div className='row mb-4'>
                <div className='qty'>
                  <select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className='w-7/12 py-2 px-1 '
                  >
                    {product.countInStock > 0
                      ? [...Array(product.countInStock).keys()].map((i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
              </div>
              <div className='row'>
                <button
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandeller}
                  className={
                    product.countInStock !== 0
                      ? `bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`
                      : `bg-slate-500 text-white py-2 px-4 rounded`
                  }
                >
                  {" "}
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
