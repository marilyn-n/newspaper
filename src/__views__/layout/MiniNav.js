import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniNav = () => {
  return (
    <div className="mini-nav-wrapper">
      <ul className="unordered-list">
        <li><NavLink to="/category/name">US</NavLink></li>
        <li><NavLink to="/category/name">World</NavLink></li>
        <li><NavLink to="/category/name">Politics</NavLink></li>
        <li><NavLink to="/category/name">NY</NavLink></li>
        <li><NavLink to="/category/name">Business</NavLink></li>
        <li><NavLink to="/category/name">Opinio</NavLink></li>
        <li><NavLink to="/category/name">Tech</NavLink></li>
        <li><NavLink to="/category/name">Science</NavLink></li>
        <li><NavLink to="/category/name">Health</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Books</NavLink></li>
        <li><NavLink to="/category/name">LifeStyle</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
        <li><NavLink to="/category/name">Sports</NavLink></li>
      </ul>
    </div>
  );
}

export default MiniNav;
