import axios from "axios";
import { URL } from "../constants";

export function fetchUUID() {
  return axios.get(URL.UUID).then(res => res.data);
}

export function login(uuid: string, tip: number) {
  return axios.get(URL.LOGIN(uuid, tip)).then(res => res.data);
}
