import * as React from "react";

export interface SearchBarProps {}

const SearchBar: React.SFC<SearchBarProps> = () => {
  return (
    <div className="nes-field search-bar">
      <input type="text" id="name_field" className="nes-input " />
      <button type="button" className="nes-btn is-success">
        搜 索
      </button>
    </div>
  );
};

export default SearchBar;
