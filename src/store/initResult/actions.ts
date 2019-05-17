import { Contact } from "../../models/InitResponse";
import { INIT_ACTION_SUCCESS, IInitActionSuccess } from "./types";

export function initActionSuccess(ContactList: Contact[]): IInitActionSuccess {
  return {
    type: INIT_ACTION_SUCCESS,
    ContactList
  };
}
