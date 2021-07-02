import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_USER,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../actions/type';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case AUTH_USER:
      return {
        ...state,
        user: payload,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        authorization: payload.user.data,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoggedIn: true,
        user: null,
      };
    default:
      return state;
  }
}
