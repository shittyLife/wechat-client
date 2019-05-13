import {
  ILoginState,
  LOGIN_ACTION_TYPES,
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  SET_USER_AVATAR
} from "./types";

const initialState: ILoginState = {
  url_type: "",
  fetching: false,
  userAvatar: "",
  error: null
};

export function loginReducer(state = initialState, action: LOGIN_ACTION_TYPES): ILoginState {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        url_type: action.url_type
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        userAvatar: action.userAvatar
      };
    default:
      return state;
  }
}
