import * as React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="nes-container is-rounded is-dark right-header">
      <img src={"null"} alt="logo" />
      <span>用户名</span>
    </div>
  );
};

export default Header;
