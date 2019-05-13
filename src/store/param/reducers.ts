import {
  IParamsState,
  ParamsActionTypes,
  FETCH_PARAMS,
  FETCH_PARAMS_SUCCESS,
  FETCH_PARAMS_FAILURE
} from "./types";

const initialState: IParamsState = {
  skey: "",
  wxsid: "",
  wxuin: "",
  pass_ticket: "",
  fetching: false,
  error: null
};

export function paramReducer(
  state = initialState,
  action: ParamsActionTypes
): IParamsState {
  switch (action.type) {
    case FETCH_PARAMS:
      return {
        fetching: true,
        skey: "",
        wxsid: "",
        wxuin: "",
        pass_ticket: "",
        error: null
      };
    case FETCH_PARAMS_SUCCESS:
      return {
        fetching: false,
        skey: action.skey,
        wxsid: action.wxsid,
        wxuin: action.wxuin,
        pass_ticket: action.pass_ticket,
        error: null
      };
    case FETCH_PARAMS_FAILURE:
      return {
        fetching: false,
        skey: "",
        wxsid: "",
        wxuin: "",
        pass_ticket: "",
        error: action.error
      };
    default:
      return state;
  }
}
