import { ADD_TO_CART } from "../actions/types";

//loat cart list from local storage
const localStorageCart = JSON.parse(localStorage.getItem("cart"));
//{products: []}
const addToCartReducer = (initialState = localStorageCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //check if product already in the cart
      const existingProduct = initialState.products.findIndex(
        (p) => p.product === action.payload.product
      );

      //if so update qty only
      if (existingProduct !== -1) {
        initialState.products[existingProduct].qty = action.payload.qty;
        return initialState;
      }

      //else append it to the cart
      const cart = {
        ...initialState,
        products: [...initialState.products, action.payload],
      };

      //save the last cart version to the local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      return cart;
    default:
      return initialState;
  }
};

export default addToCartReducer;
