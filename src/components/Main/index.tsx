import * as React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export interface MainProps {}

const Main: React.SFC<MainProps> = () => {
  return (
    <div className="container main">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default Main;
