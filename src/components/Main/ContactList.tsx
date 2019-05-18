import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { IInitState } from "../../store/initResult/reducer";
import "./ContactList.css";

export interface ContactListProps extends IInitState {}

const ContactList: React.SFC<ContactListProps> = ({ ContactList, User }) => {
  return (
    <div className="contactList">
      {ContactList.map(({ NickName }, index) => (
        <div className="nes-btn is-primary contact" key={index}>
          <img src="/images/mario.gif" />
          <span>{NickName}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ initResult: { ContactList, User } }: AppState) => ({
  ContactList,
  User,
});

export default connect(mapStateToProps)(ContactList);
