import axios from 'axios';
import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_FROM_CART,
} from './types';
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    // `http://localhost:5000/api/products/61edf85f60a84e105bb6e7e9`
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
    //save the last cart version to the local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
