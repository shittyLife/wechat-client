import { BaseResponse } from "./BaseResponse";

export interface Member {
  Uin: number;
  UserName: string;
  NickName: string;
  AttrStatus: number;
  PYInitial: string;
  PYQuanPin: string;
  RemarkPYInitial: string;
  RemarkPYQuanPin: string;
  MemberStatus: number;
  DisplayName: string;
  KeyWord: string;
}

export interface Contact {
  Uin: number;
  UserName: string;
  NickName: string;
  HeadImgUrl: string;
  ContactFlag: number;
  MemberCount: number;
  MemberList: [];
  RemarkName: string;
  HideInputBarFlag: number;
  Sex: number;
  Signature: string;
  VerifyFlag: number;
  OwnerUin: number;
  PYInitial: string;
  PYQuanPin: string;
  RemarkPYInitial: string;
  RemarkPYQuanPin: string;
  StarFriend: number;
  AppAccountFlag: number;
  Statues: number;
  AttrStatus: number;
  Province: string;
  City: string;
  Alias: string;
  SnsFlag: number;
  UniFriend: number;
  DisplayName: string;
  ChatRoomId: number;
  KeyWord: string;
  EncryChatRoomId: string;
  IsOwner: number;
}

export interface SyncKey {
  Key: number;
  Val: number;
}

export interface User {
  Uin: number;
  UserName: string;
  NickName: string;
  HeadImgUrl: string;
  RemarkName: string;
  PYInitial: string;
  PYQuanPin: string;
  RemarkPYInitial: string;
  RemarkPYQuanPin: string;
  HideInputBarFlag: number;
  StarFriend: number;
  Sex: number;
  Signature: string;
  AppAccountFlag: number;
  VerifyFlag: number;
  ContactFlag: number;
  WebWxPluginSwitch: number;
  HeadImgFlag: number;
  SnsFlag: number;
}

export interface InitResponse extends BaseResponse {
  ChatSet: string;
  ClickReportInterval: number;
  ClientVersion: number;
  ContactList: Contact[];
  Count: number;
  GrayScale: number;
  InviteStartCount: number;
  MPSubscribeMsgCount: number;
  MPSubscribeMsgList: Array<any>;
  SKey: string;
  SyncKey: {
    Count: number;
    List: SyncKey[];
  };
  SystemTime: number;
  User: User;
}
