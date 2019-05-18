import { takeLatest, put, call, take } from "redux-saga/effects";
import { FETCH_UUID, SET_QRCODE_SRC } from "./types";
import {
  setQRCodeAction,
  fetchUuidActionSuccess,
  fetchUuidActionFailure
} from "./actions";
import { URL } from "../../constants";
import * as Api from "../../api";
import { setUserAvatar, loginActionSuccess } from "../loginResult/actions";
import { checkUrlType, parseParam, generateDeviceID } from "../../util";
import { InitResponse } from "../../models/InitResponse";
import { initActionSuccess } from "../initResult/actions";

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
  // 如果 window.code 不是 200，继续轮询登录
  do {
    login_response = yield call(Api.login, uuid, tip);
    if (login_response.includes("201")) {
      tip = 0;
      userAvatar = login_response.split("'")[1];
      console.log(userAvatar);
      yield put(setUserAvatar(userAvatar));
    }
  } while (!login_response.includes("200"));

  // 登录成功，结束轮询
  const url_type = checkUrlType(login_response);
  yield put(loginActionSuccess(url_type));
  // 截取请求参数
  const query = login_response.split('"')[1].split("?")[1];
  // 获取公参
  const param_response = yield call(Api.getParams, query, url_type);
  const { skey, wxsid, wxuin, pass_ticket } = parseParam(param_response);
  const initResult: InitResponse = yield call(
    Api.initContact,
    url_type,
    pass_ticket,
    {
      BaseRequest: {
        Skey: skey,
        Uin: wxuin,
        Sid: wxsid,
        DeviceID: generateDeviceID()
      }
    }
  );
  yield put(initActionSuccess(initResult.ContactList, initResult.User));
}

export default watcherSaga;
