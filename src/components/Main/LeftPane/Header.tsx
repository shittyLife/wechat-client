import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store";
import { IInitState } from "../../../store/initResult/reducer";

export interface HeaderProps extends IInitState {}

const Header: React.SFC<HeaderProps> = ({ ContactList, User }) => {
  return (
    <div className="nes-container is-rounded is-dark left-header">
      <img src={User.HeadImgUrl} alt="头像" />
      <span>{User.NickName}</span>
      <button className="nes-btn is-warning">
        <img src="/images/icon_right-pixel.png" alt="" />
      </button>
    </div>
  );
};

const mapStateToProps = ({ initResult: { User, ContactList } }: AppState) => ({
  User,
  ContactList,
});

export default connect(mapStateToProps)(Header);
