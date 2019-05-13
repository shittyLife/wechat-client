import { IParamsState } from "../store/param/types";

export const checkUrlType = (loginResult: string): string => {
  if (loginResult.includes("web.wechat")) {
    return "web";
  } else if (loginResult.includes("wx2.qq.com")) {
    return "qq2";
  } else if (loginResult.includes("wx1.qq.com")) {
    return "qq1";
  } else if (loginResult.includes("wx.qq.com")) {
    return "qq";
  }
  return "null";
};

export const parseParam = (xmlStr: string): IParamsState => {
  const ret = xmlStr.match(/<ret>(.*)<\/ret>/),
    skey = xmlStr.match(/<skey>(.*)<\/skey>/),
    wxsid = xmlStr.match(/<wxsid>(.*)<\/wxsid>/),
    wxuin = xmlStr.match(/<wxuin>(.*)<\/wxuin>/),
    pass_ticket = xmlStr.match(/<pass_ticket>(.*)<\/pass_ticket>/),
    message = xmlStr.match(/<message>(.*)<\/message>/);
  if (ret && "0" !== ret[1]) {
    alert((message && message[1]) || "登录失败");
  }
  return {
    skey: (skey && skey[1]) || "",
    wxsid: (wxsid && wxsid[1]) || "",
    wxuin: (wxuin && wxuin[1]) || "",
    pass_ticket: (pass_ticket && pass_ticket[1]) || ""
  };
};

export const generateDeviceID = () => {
  return "e" + ("" + Math.random().toFixed(15)).substring(2, 17);
  // return `e${Math.round(Math.random() * Math.pow(10, 15))}`;
};
