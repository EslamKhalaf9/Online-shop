import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from '../actions/types';
let userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (!userInfo) userInfo = {};
export const userLoginReducer = (initialState = { userInfo }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return initialState;
  }
};

export const userRegisterReducer = (initialState = userInfo, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const userDetailsReducer = (
  initialState = { user: { userInfo } },
  action
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...initialState, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const userUpdateReducer = (initialState = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true, success: false };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return initialState;
  }
};
