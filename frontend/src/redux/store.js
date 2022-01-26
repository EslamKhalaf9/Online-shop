import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import addToCartReducer from "./reducers/addToCartReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import productListReducer from "./reducers/productListReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: addToCartReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducer, enhancer(applyMiddleware(thunk)));

export default store;
