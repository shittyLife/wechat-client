export const BASE_URL = "https://evtest.nissan.com.cn";
// "http://localhost:5000";

export const MSG_TYPE = {
  1: "文本消息",
  3: "图片消息",
  34: "语音消息",
  43: "小视频消息",
  62: "短视频消息",
  47: "表情消息",
  49: "多媒体消息",
  37: "好友请求",
  42: "分享名片",
  10000: "系统消息",
  10002: "撤回消息"
};

export const URL = {
  UUID: `${BASE_URL}/api/uuid`,
  QRCODE: (uuid: string) => `${BASE_URL}/api/qrcode/${uuid}`,
  LOGIN: (uuid: string) => `${BASE_URL}/api/login?loginicon=true&uuid=${uuid}&tip=0`,
  PARAM: (ticket: string, uuid: string, scan: string, url_type: string) =>
    `${BASE_URL}/api/param?ticket=${ticket}&uuid=${uuid}&scan=${scan}&url_type=${url_type}`,
  INIT: (url_type: string, pass_ticket: string) =>
    `${BASE_URL}/api/init?url_type=${url_type}&pass_ticket=${pass_ticket}`,
  CONTACT: (skey: string, pass_ticket: string, url_type: string) =>
    `${BASE_URL}/api/contact?skey=${skey}&pass_ticket=${pass_ticket}&url_type=${url_type}`,
  SEND_MSG: (url_type: string) => `${BASE_URL}/api/sendmsg?url_type=${url_type}`,
  GROUP: (pass_ticket: string, url_type: string) =>
    `${BASE_URL}/api/group?pass_ticket=${pass_ticket}&url_type=${url_type}`,
  SYNC_CHECK: (
    skey: string,
    sid: string,
    uin: string,
    url_type: string,
    deviceid: string,
    synckey: string
  ) =>
    `${BASE_URL}/api/synccheck?skey=${skey}&sid=${sid}&uin=${uin}&url_type=${url_type}&deviceid=${deviceid}&synckey=${synckey}`,
  SYNC: (sid: string, skey: string, pass_ticket: string, url_type: string) =>
    `${BASE_URL}/api/sync?sid=${sid}&skey=${skey}&pass_ticket=${pass_ticket}&url_type=${url_type}`
};
