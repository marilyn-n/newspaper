import React from 'react';
import { NavLink } from 'react-router-dom';


const MiniNav = () => {
  return (
    <div className="container">
      <div className="mini-nav-wrapper">
        <ul className="unordered-list">
          <li><NavLink to="/">US</NavLink></li>
          <li><NavLink to="/">World</NavLink></li>
          <li><NavLink to="/">Politics</NavLink></li>
          <li><NavLink to="/">NY</NavLink></li>
          <li><NavLink to="/">Business</NavLink></li>
          <li><NavLink to="/">Opinio</NavLink></li>
          <li><NavLink to="/">Tech</NavLink></li>
          <li><NavLink to="/">Science</NavLink></li>
          <li><NavLink to="/">Health</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Books</NavLink></li>
          <li><NavLink to="/">LifeStyle</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
          <li><NavLink to="/">Sports</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default MiniNav;
