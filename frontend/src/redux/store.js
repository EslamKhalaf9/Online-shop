import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import cartReducer from './reducers/addToCartReducer';
import productDetailsReducer from './reducers/productDetailsReducer';
import productListReducer from './reducers/productListReducer';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducer, enhancer(applyMiddleware(thunk)));

export default store;
