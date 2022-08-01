import React from "react";
import MiniNav from "../layout/MiniNav.js";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-wrapper--date">
          <span>
            {moment().format("dddd")}, {moment().format("MMM Do YY")}
          </span>
        </div>
        <div className="header-wrapper--logo">
          <span role="img" aria-label="emoji-paper">
            📰
          </span>
        </div>
        <div className="header-wrapper--label">
          <span>Today’s Paper</span>
        </div>
      </div>
      <div className="single-light-divider"></div>
      <MiniNav />
    </div>
  );
};

export default Header;
