export const FETCH_LOGIN = "FETCH_LOGIN";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

export interface ILoginState {
  url_type: string;
  redirect_uri: string;
  userAvatar: string;
  fetching: boolean;
  error: Error | null;
}

export interface IFetchLoginAction {
  type: typeof FETCH_LOGIN;
  fetching: true;
  error: null;
}

export interface ISetUserAvatarAction {
  type: typeof SET_USER_AVATAR;
  userAvatar: string;
}

export interface IFetchLoginActionSuccess {
  type: typeof FETCH_LOGIN_SUCCESS;
  fetching: false;
  redirect_uri: string;
  url_type: string;
  error: null;
}

export interface IFetchLoginActionFailure {
  type: typeof FETCH_LOGIN_FAILURE;
  fetching: false;
  error: Error;
}

export type LOGIN_ACTION_TYPES =
  | IFetchLoginAction
  | IFetchLoginActionSuccess
  | IFetchLoginActionFailure
  | IFetchLoginActionSuccess
  | ISetUserAvatarAction;
