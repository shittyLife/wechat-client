import * as React from "react";

export interface FilterProps {}

const Filter: React.SFC<FilterProps> = () => {
  return (
    <div className="filter">
      <label htmlFor="recent">
        <input
          type="radio"
          className="nes-radio"
          name="contacts"
          defaultChecked
          id="recent"
        />
        <span className="selected">最近联系人</span>
      </label>
      <label htmlFor="all">
        <input id="all" type="radio" className="nes-radio" name="contacts" />
        <span className="selected">全部联系人</span>
      </label>
    </div>
  );
};

export default Filter;
