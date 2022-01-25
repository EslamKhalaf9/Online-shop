import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../actions/types";

const productDetailsReducer = (initialState = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { product: {}, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload, loading: false };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export default productDetailsReducer;
