export const SET_QRCODE_SRC = "SET_QRCODE_SRC";
export const FETCH_UUID = "FETCH_UUID";
export const FETCH_UUID_SUCCESS = "FETCH_UUID_SUCCESS";
export const FETCH_UUID_FAILURE = "FETCH_UUID_FAILURE";

export interface IQRCodeState {
  src: string;
  uuid: string | undefined;
  fetching: boolean;
  error: Error | null;
}

export interface ISetQRCodeSrcAction {
  type: typeof SET_QRCODE_SRC;
  src: string;
}

export interface IFetchUuidAction {
  type: typeof FETCH_UUID;
  fetching: true;
  error: null;
  uuid: undefined;
}

export interface IFetchUuidActionSuccess {
  type: typeof FETCH_UUID_SUCCESS;
  fetching: false;
  error: null;
  uuid: string;
}

export interface IFetchUuidActionFailure {
  type: typeof FETCH_UUID_FAILURE;
  fetching: false;
  error: Error;
  uuid: undefined;
}

export type QRCODE_ACTION_TYPES =
  | ISetQRCodeSrcAction
  | IFetchUuidAction
  | IFetchUuidActionSuccess
  | IFetchUuidActionFailure;
