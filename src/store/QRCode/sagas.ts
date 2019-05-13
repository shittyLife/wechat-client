import { takeLatest, put, call, take } from "redux-saga/effects";
import { FETCH_UUID, SET_QRCODE_SRC } from "./types";
import {
  setQRCodeAction,
  fetchUuidActionSuccess,
  fetchUuidActionFailure
} from "./actions";
import { URL } from "../../constants";
import { FETCH_LOGIN } from "../loginResult/types";
import * as Api from "../../api";
import { setUserAvatar } from "../loginResult/actions";

function* watcherSaga() {
  yield takeLatest(FETCH_UUID, loadQrcodeFlow);
}

function* loadQrcodeFlow() {
  try {
    const uuid_response = yield call(Api.fetchUUID);
    const uuid = uuid_response.split('"')[1];
    yield put(fetchUuidActionSuccess(uuid));
    yield put(setQRCodeAction(URL.QRCODE(uuid)));
    yield loginWorker(uuid);
  } catch (e) {
    yield put(fetchUuidActionFailure(e));
  }
}

function* loginWorker(uuid: string) {
  let tip = 1;
  let login_response: string = "";
  let userAvatar: string;
  // 如果 window.code 不是 200，继续轮询
  do {
    login_response = yield call(Api.login, uuid, tip);
    if (login_response.includes("201")) {
      tip = 0;
      userAvatar = login_response.split("'")[1];
      console.log(userAvatar);
      yield put(setUserAvatar(userAvatar));
    }
  } while (!login_response.includes("200"));

  console.log(login_response);
}

// function* loginFlow(uuid:string, tip:number) {
//   while (true) {
//     yield take(FETCH_LOGIN);
//     const login_response:string = yield call(Api.login, uuid, tip);
//     if (login_response.includes('201')) {

//     } else if (login_response.includes('200')) {

//     } else {

//     }
//   }
// }

export default watcherSaga;
