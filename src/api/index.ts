import axios from "axios";
import { URL } from "../constants";

interface IBaseRequest {
  BaseRequest: {
    Uin: string;
    Sid: string;
    Skey: string;
    DeviceID: string;
  };
}

export function fetchUUID() {
  return axios.get(URL.UUID).then(res => res.data);
}

export function login(uuid: string, tip: number) {
  return axios.get(URL.LOGIN(uuid, tip)).then(res => res.data);
}

export function getParams(query: string, url_type: string) {
  return axios.get(URL.PARAM(query, url_type)).then(res => res.data);
}

export function initContact(
  url_type: string,
  pass_ticket: string,
  baseRequest: IBaseRequest
) {
  const options = {
    url: URL.INIT(url_type, pass_ticket),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8"
    },
    data: JSON.stringify(baseRequest),
    withCredentials: true
  };
  return axios(options).then(res => res.data);
}
