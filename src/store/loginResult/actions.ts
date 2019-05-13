import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  IFetchLoginAction,
  IFetchLoginActionSuccess,
  IFetchLoginActionFailure,
  ISetUserAvatarAction,
  SET_USER_AVATAR
} from "./types";

export function loginAction(): IFetchLoginAction {
  return {
    type: FETCH_LOGIN,
    fetching: true,
    error: null
  };
}

export function loginActionSuccess(
  redirect_uri: string,
  url_type: string
): IFetchLoginActionSuccess {
  return {
    type: FETCH_LOGIN_SUCCESS,
    fetching: false,
    redirect_uri,
    url_type,
    error: null
  };
}

export function setUserAvatar(userAvatar: string): ISetUserAvatarAction {
  return {
    type: SET_USER_AVATAR,
    userAvatar
  };
}

export function loginActionFailure(error: Error): IFetchLoginActionFailure {
  return {
    type: FETCH_LOGIN_FAILURE,
    fetching: false,
    error
  };
}
