import { FETCH_PARAMS, IParamsState, ParamsActionTypes } from "./types";

export function setParams(
  skey: string,
  wxsid: string,
  wxuin: string,
  pass_ticket: string
): ParamsActionTypes {
  return {
    type: FETCH_PARAMS,
    skey,
    wxsid,
    wxuin,
    pass_ticket
  };
}
