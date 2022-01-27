import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

//loat cart list from local storage
let localStorageCart = JSON.parse(localStorage.getItem("cart"));
if (!localStorageCart) localStorageCart = { products: [] };
//{products: []}
const cartReducer = (initialState = localStorageCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //check if product already in the cart
      const existingProduct = initialState.products.findIndex(
        (p) => p.product === action.payload.product
      );

      //if so update qty only
      if (existingProduct !== -1) {
        const newItems = { ...initialState };
        newItems.products[existingProduct].qty = action.payload.qty;
        return newItems;
      }

      //else append it to the cart
      const cart = {
        ...initialState,
        products: [...initialState.products, action.payload],
      };

      return cart;

    case REMOVE_FROM_CART:
      const productIndex = initialState.products.findIndex(
        (p) => p.product === action.payload
      );
      const newItems = { ...initialState };
      newItems.products.splice(productIndex, 1);
      return newItems;

    default:
      return initialState;
  }
};

export default cartReducer;
