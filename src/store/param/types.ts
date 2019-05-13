export const FETCH_PARAMS = "FETCH_PARAMS";
export const FETCH_PARAMS_SUCCESS = "FETCH_PARAMS_SUCCESS";
export const FETCH_PARAMS_FAILURE = "FETCH_PARAMS_FAILURE";

export interface IParamsState {
  skey: string;
  wxsid: string;
  wxuin: string;
  pass_ticket: string;
  fetching: boolean;
  error: Error | null;
}

export interface IFetchParamsAction {
  type: typeof FETCH_PARAMS;
  fetching: true;
  error: null;
}

export interface IFetchParamsActionSuccess extends IParamsState {
  type: typeof FETCH_PARAMS_SUCCESS;
  fetching: false;
  error: null;
}

export interface IFetchParamsActionFailure {
  type: typeof FETCH_PARAMS_FAILURE;
  fetching: false;
  error: Error;
}

export type ParamsActionTypes =
  | IFetchParamsAction
  | IFetchParamsActionSuccess
  | IFetchParamsActionFailure;
