import { Contact } from "../../models/InitResponse";

export const INIT_ACTION_SUCCESS = "INIT_ACTION_SUCCESS";

export interface IInitActionSuccess {
  type: typeof INIT_ACTION_SUCCESS;
  ContactList: Contact[];
}

export type InitActionTypes = IInitActionSuccess;
