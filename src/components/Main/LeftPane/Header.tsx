import * as React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="nes-container is-rounded is-dark left-header">
      <img src={"null"} alt="头像" />
      <span>Tao</span>
      <button className="nes-btn is-warning">
        <img src="/images/icon_right-pixel.png" alt="" />
      </button>
    </div>
  );
};

export default Header;
