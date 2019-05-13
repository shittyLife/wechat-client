import { IParamsState, ParamsActionTypes, FETCH_PARAMS } from "./types";

const initialState: IParamsState = {
  skey: "",
  wxsid: "",
  wxuin: "",
  pass_ticket: ""
};

export function paramReducer(state = initialState, action: ParamsActionTypes): IParamsState {
  switch (action.type) {
    case FETCH_PARAMS:
      return {
        ...state,
        skey: action.skey,
        wxsid: action.wxsid,
        wxuin: action.wxuin,
        pass_ticket: action.pass_ticket
      };
    default:
      return state;
  }
}
