import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const fetchedProducts = await Product.find();
  res.send(fetchedProducts);
};
export const getProduct = async (req, res) => {
  const { id } = req.params;
  const fetchedProduct = await Product.findById(id);
  res.send(fetchedProduct);
};
