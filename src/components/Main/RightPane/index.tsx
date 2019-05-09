import * as React from "react";
import Header from "./Header";
import ChatWindow from "./ChatWindow";
import Footer from "./Footer";
import "./index.css";

export interface RightPaneProps {}

const RightPane: React.SFC<RightPaneProps> = () => {
  return (
    <div className="right-pane">
      <Header />
      <ChatWindow />
      <Footer />
    </div>
  );
};

export default RightPane;
