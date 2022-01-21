import Product from "../models/Product.js";

export const getProducts = (req, res) => {
  const fetchedProducts = Product.fetchAll();
  res.send(fetchedProducts);
};
export const getProduct = (req, res) => {
  const { id } = req.params;
  const fetchedProduct = Product.fetchById(id);
  res.send(fetchedProduct);
};
