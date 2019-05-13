import {
  FETCH_PARAMS,
  IFetchParamsAction,
  FETCH_PARAMS_SUCCESS,
  IFetchParamsActionSuccess,
  IFetchParamsActionFailure,
  FETCH_PARAMS_FAILURE
} from "./types";

export function fetchParamsAction(): IFetchParamsAction {
  return {
    type: FETCH_PARAMS,
    fetching: true,
    error: null
  };
}

export function fetchParamsActionSuccess(
  skey: string,
  wxsid: string,
  wxuin: string,
  pass_ticket: string
): IFetchParamsActionSuccess {
  return {
    type: FETCH_PARAMS_SUCCESS,
    skey,
    wxsid,
    wxuin,
    pass_ticket,
    fetching: false,
    error: null
  };
}

export function fetchParamsActionFailure(
  error: Error
): IFetchParamsActionFailure {
  return {
    type: FETCH_PARAMS_FAILURE,
    fetching: false,
    error
  };
}
