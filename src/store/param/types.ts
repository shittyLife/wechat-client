export const FETCH_PARAMS = "FETCH_PARAMS";
// export const FETCH_PARAMS_SUCCESS = "FETCH_PARAMS_SUCCESS";
// export const FETCH_PARAMS_FAILURE = "FETCH_PARAMS_FAILURE";

export interface IParamsState {
  skey: string;
  wxsid: string;
  wxuin: string;
  pass_ticket: string;
}

export interface ISetParams extends IParamsState {
  type: typeof FETCH_PARAMS;
}

export type ParamsActionTypes = ISetParams;
