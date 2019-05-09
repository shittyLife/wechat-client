import * as React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Filter from "./Filter";
import ContactList from "../ContactList";
import "./index.css";

export interface LeftPaneProps {}

const LeftPane: React.SFC<LeftPaneProps> = () => {
  return (
    <div className="left-pane">
      <Header />
      <SearchBar />
      <Filter />
      <ContactList />
    </div>
  );
};

export default LeftPane;
