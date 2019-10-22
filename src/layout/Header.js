import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-wrapper--date">
          <span>Monday, October 7, 2019</span>
        </div>
        <div className="header-wrapper--logo">
          <span>📰</span>
        </div>
        <div className="header-wrapper--label">
          <span>Today’s Paper</span>
        </div>
      </div>
      <div className="single-light-divider mt-3"></div>
    </div>
  );
}

export default Header;
