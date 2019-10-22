import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniNav = () => {
  return (
    <div className="mini-nav-wrapper">
      <ul className="unordered-list">
        <li><NavLink to="/category:id">US</NavLink></li>
        <li><NavLink to="/category:id">World</NavLink></li>
        <li><NavLink to="/category:id">Politics</NavLink></li>
        <li><NavLink to="/category:id">NY</NavLink></li>
        <li><NavLink to="/category:id">Business</NavLink></li>
        <li><NavLink to="/category:id">Opinio</NavLink></li>
        <li><NavLink to="/category:id">Tech</NavLink></li>
        <li><NavLink to="/category:id">Science</NavLink></li>
        <li><NavLink to="/category:id">Health</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Books</NavLink></li>
        <li><NavLink to="/category:id">LifeStyle</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
        <li><NavLink to="/category:id">Sports</NavLink></li>
      </ul>
    </div>
  );
}

export default MiniNav;
