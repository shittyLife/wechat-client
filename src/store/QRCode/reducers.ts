import {
  IQRCodeState,
  ISetQRCodeSrcAction,
  QRCODE_ACTION_TYPES,
  IFetchUuidAction,
  IFetchUuidActionSuccess,
  IFetchUuidActionFailure,
  SET_QRCODE_SRC,
  FETCH_UUID,
  FETCH_UUID_FAILURE,
  FETCH_UUID_SUCCESS
} from "./types";
import { Reducer } from "redux";

const initialState: IQRCodeState = {
  src: "/images/mario.gif",
  uuid: undefined,
  fetching: false,
  error: null
};

export const qrcodeReducer: Reducer<IQRCodeState, QRCODE_ACTION_TYPES> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_QRCODE_SRC:
      return {
        ...state,
        src: (action as ISetQRCodeSrcAction).src
      };
    case FETCH_UUID:
      return {
        ...state,
        fetching: (action as IFetchUuidAction).fetching,
        error: (action as IFetchUuidAction).error,
        uuid: (action as IFetchUuidAction).uuid
      };
    case FETCH_UUID_SUCCESS:
      return {
        ...state,
        fetching: (action as IFetchUuidActionSuccess).fetching,
        error: (action as IFetchUuidActionSuccess).error,
        uuid: (action as IFetchUuidActionSuccess).uuid
      };
    case FETCH_UUID_FAILURE:
      return {
        ...state,
        fetching: (action as IFetchUuidActionFailure).fetching,
        error: (action as IFetchUuidActionFailure).error,
        uuid: (action as IFetchUuidActionFailure).uuid
      };
    default:
      return state;
  }
};
