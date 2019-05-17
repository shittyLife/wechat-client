import { InitResponse, Contact, SyncKey } from "../../models/InitResponse";
import { number } from "prop-types";
import {
  IInitActionSuccess,
  INIT_ACTION_SUCCESS,
  InitActionTypes
} from "./types";

export interface IInitState {
  ContactList: Contact[];
}

const initialState = {
  ContactList: new Array<Contact>()
};

export function initReducer(
  state = initialState,
  action: InitActionTypes
): IInitState {
  switch (action.type) {
    case INIT_ACTION_SUCCESS:
      return {
        ContactList: action.ContactList
      };
    default:
      return state;
  }
}
