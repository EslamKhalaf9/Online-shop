import axios from "axios";
import { ADD_TO_CART, ADD_TO_CART_FAIL } from "./types";
export const addToCart = (id, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: Number(qty),
      },
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
