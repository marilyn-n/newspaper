import React, { Component } from 'react';

class Header extends Component {
  render() {
    const date = new Date();
    const today = (date.toString()).slice(0,16);
    
    return (
      <div>
        <div className="header-wrapper">
          <div className="header-wrapper--date">
            <span>{ today }</span>
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
    )
  }
}

export default Header;
