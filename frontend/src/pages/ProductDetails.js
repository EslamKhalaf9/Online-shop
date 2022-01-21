import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const myProduct = products.find((p) => p._id === id);
    setProduct(myProduct);
  }, []);
  return (
    <div>
      hey i'm product and to prove that here is my title {product.name} do you
      believe me now ?!
    </div>
  );
};

export default ProductDetails;
