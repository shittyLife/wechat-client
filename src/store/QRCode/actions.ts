import { URL } from "../../constants";
import {
  ISetQRCodeSrcAction,
  QRCODE_ACTION_TYPES,
  IQRCodeState,
  SET_QRCODE_SRC,
  IFetchUuidAction,
  FETCH_UUID,
  IFetchUuidActionSuccess,
  FETCH_UUID_SUCCESS,
  IFetchUuidActionFailure,
  FETCH_UUID_FAILURE
} from "./types";
import { ActionCreator } from "redux";

export function setQRCodeAction(src: string): ISetQRCodeSrcAction {
  return {
    type: SET_QRCODE_SRC,
    src
  };
}

export function fetchUuidAction(): IFetchUuidAction {
  return {
    type: FETCH_UUID,
    fetching: true,
    error: null,
    uuid: undefined
  };
}

export function fetchUuidActionSuccess(uuid: string): IFetchUuidActionSuccess {
  return {
    type: FETCH_UUID_SUCCESS,
    fetching: false,
    uuid,
    error: null
  };
}

export function fetchUuidActionFailure(error: Error): IFetchUuidActionFailure {
  return {
    type: FETCH_UUID_FAILURE,
    fetching: false,
    uuid: undefined,
    error
  };
}
