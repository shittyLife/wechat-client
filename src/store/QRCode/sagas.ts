import { takeLatest, put, call } from "redux-saga/effects";
import { FETCH_UUID, SET_QRCODE_SRC } from "./types";
import axios from "axios";
import {
  setQRCodeAction,
  fetchUuidActionSuccess,
  fetchUuidActionFailure
} from "./actions";
import { URL } from "../../constants";

function* watcherSaga() {
  yield takeLatest(FETCH_UUID, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchUUIDAsync, URL.UUID);
    const uuid = response.split('"')[1];
    yield put(fetchUuidActionSuccess(uuid));
    yield put(setQRCodeAction(URL.QRCODE(uuid)));
  } catch (e) {
    yield put(fetchUuidActionFailure(e));
  }
}

function fetchUUIDAsync(url: string) {
  return axios.get(url).then(res => res.data);
}

export default watcherSaga;
