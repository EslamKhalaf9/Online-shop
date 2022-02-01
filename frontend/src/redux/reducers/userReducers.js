import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../actions/types";
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (!userInfo) userInfo = {};
export const userLoginReducer = (initialState = userInfo, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { error: action.payload };
    default:
      return initialState;
  }
};
