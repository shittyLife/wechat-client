import * as React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <div className="footer">
      <textarea id="textarea_field" className="nes-textarea" rows={50} />
      <button type="button" className="nes-btn is-warning">
        发送消息
      </button>
    </div>
  );
};

export default Footer;
